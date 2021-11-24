import requests

from lxml import etree
def get_pic(url):
    return requests.get(url).content
    
url='http://www.tp-linkshop.com.cn/ProductImg540/1729.png'
name=url[-8:]
pic=get_pic(url)
with open("images/pic.png","wb") as f:
    f.write(pic)
# url1=['http://www.tp-linkshop.com.cn/ProductImg540/1729.png','http://www.tp-linkshop.com.cn/ProductImg540/1729_1.jpg','http://www.tp-linkshop.com.cn/ProductImg540/1729_2.jpg','http://www.tp-linkshop.com.cn/ProductImg540/1729_3.jpg','http://www.tp-linkshop.com.cn/ProductImg540/1729_4.jpg']
# print(len(url1))
