Feature: Buying Currency Widget

Scenario Outline: Customers should be able to buy currency 

Given A webbroswer is at the travelex website
When  A customer choose country "<country>" from dropdown
And Customer enter how much amount "<amount>" they like
And Customer optin cash and clicks on Buy Cash
And Customer enter postcode "<postcode>" and clikc on find store
And Customer choose nearest location and choose date and click next 
And Customer enter "<title>" , "<firstname>" , "<lastname>" , "<phonenumber>" , "<addphonenumber>" , "<email>" , "<confirmemail>" , 



Examples:

|country                            |amount|postcode |title|firstname|lastname|phonenumber|addphonenumber|email       |confirmemail|
|Euro - (EUR)                       |2000  |E12 6NU  |Mr.  |test     |testing |07809123456|07809123456   |nn@gmail.com|nn@gmail.com|
|USA - U.S. Dollar (USD)            |3000  |E12 6NU  |Miss.|test     |testing |07809123456|07809123456   |nn@gmail.com|nn@gmail.com|
|Australia - Australian Dollar (AUD)|4000  |E12 6NU|Mrs. |test     |testing |07809123456|07809123456   |nn@gmail.com|nn@gmail.com|