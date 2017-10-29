package com.travelex.base;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestBase {

	public static WebDriver driver;
	public static boolean Initialize;
	public static Properties Config;
	public static FileInputStream cf;
	public String text;

	public void Initialized() throws IOException {
		if(!Initialize)
		{
		Config = new Properties();
		cf = new FileInputStream(System.getProperty("user.dir") + "/src/test/java/com/travelex/utils/Config.properties" );
		Config.load(cf);
	}
	}

	public void navigate(String url) {
		driver.get(Config.getProperty(url));
	}

	public void openBrowser(String browser) {

		if (Config.getProperty(browser).equalsIgnoreCase("firefox")) {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		} else if (Config.getProperty(browser).equals("ie")) {
			System.setProperty("webdriver.ie.driver", "path");
			driver = new InternetExplorerDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		} else if (Config.getProperty(browser).equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "path");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	public void dropdown(WebElement ele, String value) {
		Select dropdown = new Select(ele);
		dropdown.selectByValue(value);
	}

	public void type(WebElement element, String value) {
		element.sendKeys(value);
	}

	public void clickOn(WebElement element) {
		element.click();
	}

	public void assertEquals(WebElement element, String expected) throws InterruptedException {
		String Actual = element.getText();
		if (Actual.equals(Config.getProperty(expected))) {
			System.out.println(
					"The Expected and Actual Results are Matched " + Config.getProperty(expected) + "=" + Actual);
		} else {
			System.err.println("The Expected and Actual Results are not Matched ");
		}

	}
	public void jseGetText(WebElement element)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		text=(String) (jse.executeScript("return arguments[0].text;",element));
	}
	public void jseClick(WebElement element)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].click()", element);
	}
	public void jseScrollview(WebElement element)
	{
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].scrollIntoView(true);", element);
	}

	public void waitForElement(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 40);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
    
}
