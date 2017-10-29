package com.travelex.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.travelex.base.TestBase;

public class PaymentPage extends TestBase {

	public WebDriver  driver;
	public PaymentPage(WebDriver  driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="title") public WebElement Title;
	@FindBy(id="firstname") public WebElement Firstname;
	@FindBy(id="lastname") public WebElement  Lastname;
	@FindBy(id="phonenumber") public WebElement Phonenumber;
	@FindBy(id="addphonenumber") public WebElement Addphonenumber;
	@FindBy(id="email") public WebElement Email;
	@FindBy(id="confirmemail") public WebElement Confirmemail;
	
	public void enterdetails(String title, String firstName, String lastName, String phoneNumber, String addPhoneNumber,String email, String confirmEmail)
	{
		dropdown(Title, title);
		type(Firstname, firstName);
		type(Lastname, lastName);
	    type(Phonenumber, phoneNumber);
	    type(Addphonenumber, addPhoneNumber);
	    type(Email, email);
	    type(Confirmemail, confirmEmail);
	}

}
