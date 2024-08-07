import requests
from bs4 import BeautifulSoup

#header_user = {"User_" : }

base_url = "https://search.naver.com/search.naver?ssc=tab.blog.all&sm=tab_jum&query="
keyword = input("검색어를 하나만 입력해주세요")
url = base_url + keyword


req = requests.get(url, header_user) #.get에 네이버 주소가 들어감
#print(req.raise_for_status())
print(req.request)

html = req.text #텍스트 형태 가져옴
#print(html)

soup = BeautifulSoup(html, 'html.parser') #html에 해당하는 명령어 입력
#print(soup)
soup.select()

query = soup.select_one(".search_input_box") #.클래스를 뜻함
#print(query)