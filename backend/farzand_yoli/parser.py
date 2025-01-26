import requests

url = "https://google-search-master-mega.p.rapidapi.com/search"

querystring = {"q":"School","gl":"uz","hl":"ru","autocorrect":"true","num":"10","page":"10"}

headers = {
	"x-rapidapi-key": "29abf393d7msh977e6d7c5538261p156d67jsn3ab4688a88b9",
	"x-rapidapi-host": "google-search-master-mega.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())