import requests
from bs4 import BeautifulSoup as BS

r = requests.get('https://www.google.com/maps/@41.3103815,69.3285815,16z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D')

html = BS(r.content, 'html.parser')
tag = html.a
print(tag)