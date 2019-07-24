import os
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys

driver=webdriver.Chrome()
#driver=webdriver.Chrome(".\drivers\chromedriver.exe")

driver.set_page_load_timeout("10")
driver.get('http://google.com')
driver.find_element_by_name('q').send_keys("VAAAYY BEEEE DJ ERCIK BUYUK ADAMMIŞ")
driver.find_element_by_name('q').send_keys(Keys.ENTER)
driver.maximize_window()
driver.refresh()
print("Test COmpleted SUCCCESSFULLY")
time.sleep(4)
driver.quit()