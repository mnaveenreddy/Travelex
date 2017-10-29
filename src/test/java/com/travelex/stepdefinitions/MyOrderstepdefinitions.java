package com.travelex.stepdefinitions;

import com.travelex.base.TestBase;
import com.travelex.pages.MyOrderPage;

import cucumber.api.java.en.When;

public class MyOrderstepdefinitions extends TestBase{

	@When("^Customer enter postcode \"([^\"]*)\" and clikc on find store$")
	public void customer_enter_postcode_and_clikc_on_find_store(String postCode) throws Throwable {
	    MyOrderPage mp= new MyOrderPage(driver);
	    mp.enterPostcode(postCode);
	    
	    
	}

	@When("^Customer choose nearest location and choose date and click next$")
	public void customer_choose_nearest_location_and_choose_date_and_click_next() throws Throwable {
		MyOrderPage mp= new MyOrderPage(driver);
		mp.nearestLocation();
	}

}
