package com.travelex.utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.travelex.base.TestBase;



public class Screenshot extends TestBase {
	
	public static String getScreenshot(String name) throws IOException
	{
		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		String dest=System.getProperty("user.dir") + "/Screenshots/" + name + ".png";
		File destination=new File(dest);
		FileUtils.copyFile(src, destination);
		return dest;
	}
}