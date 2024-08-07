import requests
from bs4 import BeautifulSoup

url = 'https://www.naver.com' #string

req = requests.get(url) #.get에 네이버 주소가 들어감
#print(req)

html = req.text #텍스트 형태 가져옴
#print(html)

soup = BeautifulSoup(html, 'html.parser') #html에 해당하는 명령어 입력
#print(soup)

query = soup.select_one(".search_input_box") #.클래스를 뜻함
print(query)
