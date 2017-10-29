package com.travelex.stepdefinitions;

import com.travelex.base.TestBase;
import com.travelex.pages.PaymentPage;

import cucumber.api.java.en.When;

public class PaymentStepdefinitions extends TestBase{

	@When("^Customer enter \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,$")
	public void customer_enter(String title, String firstName, String lastName, String phoneNumber, String addPhoneNumber, String email, String confirmEmail) throws Throwable {
	   PaymentPage pp=new PaymentPage(driver);
	   pp.enterdetails(title, firstName, lastName, phoneNumber, addPhoneNumber, email, confirmEmail);
	}

}
