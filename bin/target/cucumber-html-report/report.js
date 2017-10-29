$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuyCurrency.feature");
formatter.feature({
  "line": 1,
  "name": "Buying Currency Widget",
  "description": "",
  "id": "buying-currency-widget",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Customers should be able to buy currency",
  "description": "",
  "id": "buying-currency-widget;customers-should-be-able-to-buy-currency",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "A webbroswer is at the travelex website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "A customer choose country \"\u003ccountry\u003e\" from dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Customer enter how much amount \"\u003camount\u003e\" they like",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Customer optin cash and clicks on Buy Cash",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer enter postcode \"\u003cpostcode\u003e\" and clikc on find store",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Customer choose nearest location and choose date and click next",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Customer enter \"\u003ctitle\u003e\" , \"\u003cfirstname\u003e\" , \"\u003clastname\u003e\" , \"\u003cphonenumber\u003e\" , \"\u003caddphonenumber\u003e\" , \"\u003cemail\u003e\" , \"\u003cconfirmemail\u003e\" ,",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;",
  "rows": [
    {
      "cells": [
        "country",
        "amount",
        "postcode",
        "title",
        "firstname",
        "lastname",
        "phonenumber",
        "addphonenumber",
        "email",
        "confirmemail"
      ],
      "line": 17,
      "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;1"
    },
    {
      "cells": [
        "Euro - (EUR)",
        "2000",
        "E12 6NU",
        "Mr.",
        "test",
        "testing",
        "07809123456",
        "07809123456",
        "nn@gmail.com",
        "nn@gmail.com"
      ],
      "line": 18,
      "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;2"
    },
    {
      "cells": [
        "USA - U.S. Dollar (USD)",
        "3000",
        "E12 6NU",
        "Miss.",
        "test",
        "testing",
        "07809123456",
        "07809123456",
        "nn@gmail.com",
        "nn@gmail.com"
      ],
      "line": 19,
      "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;3"
    },
    {
      "cells": [
        "Australia - Australian Dollar (AUD)",
        "4000",
        "E12 6NU",
        "Mrs.",
        "test",
        "testing",
        "07809123456",
        "07809123456",
        "nn@gmail.com",
        "nn@gmail.com"
      ],
      "line": 20,
      "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Customers should be able to buy currency",
  "description": "",
  "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "A webbroswer is at the travelex website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "A customer choose country \"Euro - (EUR)\" from dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Customer enter how much amount \"2000\" they like",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Customer optin cash and clicks on Buy Cash",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer enter postcode \"E12 6NU\" and clikc on find store",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Customer choose nearest location and choose date and click next",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Customer enter \"Mr.\" , \"test\" , \"testing\" , \"07809123456\" , \"07809123456\" , \"nn@gmail.com\" , \"nn@gmail.com\" ,",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.a_webbroswer_is_at_the_travelex_website()"
});
formatter.result({
  "duration": 11980474158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro - (EUR)",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefinitions.a_customer_choose_country_from_dropdown(String)"
});
formatter.result({
  "duration": 2223314689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 32
    }
  ],
  "location": "HomePageStepDefinitions.customer_enter_how_much_amount_they_like(String)"
});
formatter.result({
  "duration": 212867093,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.customer_optin_cash_and_clicks_on_Buy_Cash()"
});
formatter.result({
  "duration": 9811906496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E12 6NU",
      "offset": 25
    }
  ],
  "location": "MyOrderstepdefinitions.customer_enter_postcode_and_clikc_on_find_store(String)"
});
formatter.result({
  "duration": 2001768778,
  "status": "passed"
});
formatter.match({
  "location": "MyOrderstepdefinitions.customer_choose_nearest_location_and_choose_date_and_click_next()"
});
formatter.result({
  "duration": 5719274424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 16
    },
    {
      "val": "test",
      "offset": 24
    },
    {
      "val": "testing",
      "offset": 33
    },
    {
      "val": "07809123456",
      "offset": 45
    },
    {
      "val": "07809123456",
      "offset": 61
    },
    {
      "val": "nn@gmail.com",
      "offset": 77
    },
    {
      "val": "nn@gmail.com",
      "offset": 94
    }
  ],
  "location": "PaymentStepdefinitions.customer_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5043754173,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Customers should be able to buy currency",
  "description": "",
  "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "A webbroswer is at the travelex website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "A customer choose country \"USA - U.S. Dollar (USD)\" from dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Customer enter how much amount \"3000\" they like",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Customer optin cash and clicks on Buy Cash",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer enter postcode \"E12 6NU\" and clikc on find store",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Customer choose nearest location and choose date and click next",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Customer enter \"Miss.\" , \"test\" , \"testing\" , \"07809123456\" , \"07809123456\" , \"nn@gmail.com\" , \"nn@gmail.com\" ,",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.a_webbroswer_is_at_the_travelex_website()"
});
formatter.result({
  "duration": 21239738327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA - U.S. Dollar (USD)",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefinitions.a_customer_choose_country_from_dropdown(String)"
});
formatter.result({
  "duration": 2535209425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 32
    }
  ],
  "location": "HomePageStepDefinitions.customer_enter_how_much_amount_they_like(String)"
});
formatter.result({
  "duration": 336126486,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.customer_optin_cash_and_clicks_on_Buy_Cash()"
});
formatter.result({
  "duration": 3788891422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E12 6NU",
      "offset": 25
    }
  ],
  "location": "MyOrderstepdefinitions.customer_enter_postcode_and_clikc_on_find_store(String)"
});
formatter.result({
  "duration": 1259675145,
  "status": "passed"
});
formatter.match({
  "location": "MyOrderstepdefinitions.customer_choose_nearest_location_and_choose_date_and_click_next()"
});
formatter.result({
  "duration": 4786424283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miss.",
      "offset": 16
    },
    {
      "val": "test",
      "offset": 26
    },
    {
      "val": "testing",
      "offset": 35
    },
    {
      "val": "07809123456",
      "offset": 47
    },
    {
      "val": "07809123456",
      "offset": 63
    },
    {
      "val": "nn@gmail.com",
      "offset": 79
    },
    {
      "val": "nn@gmail.com",
      "offset": 96
    }
  ],
  "location": "PaymentStepdefinitions.customer_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3585915546,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Customers should be able to buy currency",
  "description": "",
  "id": "buying-currency-widget;customers-should-be-able-to-buy-currency;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "A webbroswer is at the travelex website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "A customer choose country \"Australia - Australian Dollar (AUD)\" from dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Customer enter how much amount \"4000\" they like",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Customer optin cash and clicks on Buy Cash",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer enter postcode \"E12 6NU\" and clikc on find store",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Customer choose nearest location and choose date and click next",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Customer enter \"Mrs.\" , \"test\" , \"testing\" , \"07809123456\" , \"07809123456\" , \"nn@gmail.com\" , \"nn@gmail.com\" ,",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.a_webbroswer_is_at_the_travelex_website()"
});
formatter.result({
  "duration": 8152053361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia - Australian Dollar (AUD)",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefinitions.a_customer_choose_country_from_dropdown(String)"
});
formatter.result({
  "duration": 2386471240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 32
    }
  ],
  "location": "HomePageStepDefinitions.customer_enter_how_much_amount_they_like(String)"
});
formatter.result({
  "duration": 182650747,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.customer_optin_cash_and_clicks_on_Buy_Cash()"
});
formatter.result({
  "duration": 3806818264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E12 6NU",
      "offset": 25
    }
  ],
  "location": "MyOrderstepdefinitions.customer_enter_postcode_and_clikc_on_find_store(String)"
});
formatter.result({
  "duration": 1362009411,
  "status": "passed"
});
formatter.match({
  "location": "MyOrderstepdefinitions.customer_choose_nearest_location_and_choose_date_and_click_next()"
});
formatter.result({
  "duration": 31360571209,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-PCC37BG\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bfbb254c-11bf-42e1-b698-4998fa60a79a\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat com.travelex.base.TestBase.waitForElement(TestBase.java:104)\r\n\tat com.travelex.pages.MyOrderPage.nearestLocation(MyOrderPage.java:44)\r\n\tat com.travelex.stepdefinitions.MyOrderstepdefinitions.customer_choose_nearest_location_and_choose_date_and_click_next(MyOrderstepdefinitions.java:21)\r\n\tat ✽.And Customer choose nearest location and choose date and click next(BuyCurrency.feature:10)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:158)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:162)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat com.travelex.base.TestBase.waitForElement(TestBase.java:104)\r\n\tat com.travelex.pages.MyOrderPage.nearestLocation(MyOrderPage.java:44)\r\n\tat com.travelex.stepdefinitions.MyOrderstepdefinitions.customer_choose_nearest_location_and_choose_date_and_click_next(MyOrderstepdefinitions.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:141)\r\n\t... 75 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs.",
      "offset": 16
    },
    {
      "val": "test",
      "offset": 25
    },
    {
      "val": "testing",
      "offset": 34
    },
    {
      "val": "07809123456",
      "offset": 46
    },
    {
      "val": "07809123456",
      "offset": 62
    },
    {
      "val": "nn@gmail.com",
      "offset": 78
    },
    {
      "val": "nn@gmail.com",
      "offset": 95
    }
  ],
  "location": "PaymentStepdefinitions.customer_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
});