package com.travelex.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.travelex.base.TestBase;

public class HomePage extends TestBase {

	public WebDriver driver;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "html/body/div[1]/div[2]/div/section[1]/article/section/article/div/form/div/div[2]/div[1]/div[1]/input")
	public WebElement Country;
	@FindBy(id = "x-buy-amount")
	public WebElement Enteramount;
	@FindBy(xpath = "//button[@class='red-button next addCash']")
	public WebElement BuyCash;

	public void choosingCountry(String country) {
		clickOn(Country);
		for (int i = 1; i < 240; i++) {
			WebElement Countries = driver.findElement(By.xpath("html/body/ul[2]/li[" + i + "]/a"));
			jseGetText(Countries);
			if (text.trim().equals(country)) {
				jseClick(Countries);
				break;
			}
		}
	}

	public void enterAmount(String amount) {
	  waitForElement(Enteramount);
      Enteramount.clear();
      waitForElement(Enteramount);
      type(Enteramount, amount);
	}
	public void optincash()
	{
		clickOn(BuyCash);
	}

}
