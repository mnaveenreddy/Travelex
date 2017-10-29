package com.travelex.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.travelex.base.TestBase;

public class MyOrderPage extends TestBase {

	public WebDriver  driver;
	public MyOrderPage(WebDriver  driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(id="searchTerm") public WebElement PostCode;
	@FindBy(id="searchBtn") public WebElement FindaStore;
	@FindBy(xpath="html/body/div[4]/div/div/form/div[2]/article[2]/div[2]/div[2]/section/div[3]/ul[1]/li[1]")
	public WebElement NearestStore;
	@FindBy(xpath="html/body/div[4]/div/div/form/div[2]/article[2]/div[2]/div[2]/section/div[3]/ul[1]/li[1]/div[1]/span/a")
	public WebElement Selectlocation;
	@FindBy(xpath="html/body/div[4]/div/div/form/div[2]/article[2]/div[2]/div[2]/section/div[3]/ul[1]/li[1]/div[1]/span/ul/li[1]")
	public WebElement selectNearestLocation;
	@FindBy(xpath="html/body/div[4]/div/div/form/div[2]/article[2]/section/div/div/div/div/div/div[2]/table/tbody/tr[1]/td[7]/a")
	               
	public WebElement Selectdate;
	@FindBy(id="submitBtn") public WebElement Submit;
	
	public void enterPostcode(String postCode) throws InterruptedException
	{
		type(PostCode, postCode);
		waitForElement(FindaStore);
		jseClick(FindaStore);
	}
	public void nearestLocation()
	{
	   clickOn(NearestStore);
	   if(Selectlocation.isDisplayed())
	   {
		   clickOn(Selectlocation);
		   clickOn(selectNearestLocation);
		   waitForElement(Selectdate);
		   jseScrollview(Selectdate);
		   jseClick(Selectdate);
		   jseClick(Submit);
		   
	   }
	}
	
}
