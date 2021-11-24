import requests

from lxml import etree
def get_web(url):
    req=requests.get(url)
    return req.text
kugou_url="https://www.tp-linkshop.com.cn/Products/Search?Keyword=%E4%BA%A4%E6%8D%A2%E6%9C%BA"
html=get_web(kugou_url)
tree=etree.HTML(html)
data=tree.xpath('//h3[@class="product-search-presentation-each-container-title"]/text()')
price=tree.xpath('//p[@class="product-search-presentation-each-container-price-red"]/text()')    
database=[]
databases=[]
for index,item in enumerate(data):
    database.append(index+11)
    database.append(item.strip())
    database.append(price[index])
    # database.append('img/produce'+12+index+".png")
    databases.append(database)
    database=[]
print(databases)