package com.travelex.stepdefinitions;

import com.travelex.base.TestBase;
import com.travelex.pages.HomePage;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageStepDefinitions extends TestBase {
	
	TestBase cucumber=new TestBase();
	
	@Given("^A webbroswer is at the travelex website$")
	public void a_webbroswer_is_at_the_travelex_website() throws Throwable {
		cucumber.Initialized();
	  cucumber.openBrowser("browser");
	  cucumber.navigate("produrl");
	   
	}

	@When("^A customer choose country \"([^\"]*)\" from dropdown$")
	public void a_customer_choose_country_from_dropdown(String arg1) throws Throwable {
		HomePage hp=new HomePage(driver);
		hp.choosingCountry(arg1);
	   
	}

	@When("^Customer enter how much amount \"([^\"]*)\" they like$")
	public void customer_enter_how_much_amount_they_like(String arg1) throws Throwable {
	  
		HomePage hp=new HomePage(driver);
		hp.enterAmount(arg1);
	}

	@When("^Customer optin cash and clicks on Buy Cash$")
	public void customer_optin_cash_and_clicks_on_Buy_Cash() throws Throwable {
	  
		HomePage hp=new HomePage(driver);
		hp.optincash();
	}

	
	
}
