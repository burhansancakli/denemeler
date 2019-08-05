import os
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys

driver=webdriver.Chrome(".\drivers\chromedriver.exe")
#driver=webdriver.Chrome(".\drivers\chromedriver.exe")

driver.set_page_load_timeout("10")
driver.get('https://www.istanbulbbsk.org/galeriler/resim-galerisi/')
while driver.find_element_by_class_name('view-all-button'):
    driver.find_element_by_class_name('view-all-button').send_keys(Keys.ENTER)
    time.sleep(1)
    
driver.maximize_window()
print("Test COmpleted SUCCCESSFULLY")
with open('example.js', 'r') as js_text: 
    js = js_text.read() 
    driver.execute_script(js)
print('bu da bitti')
time.sleep(4)