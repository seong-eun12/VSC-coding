import requests

# 예시 URL 설정
url = 'https://kream.co.kr/'

# GET 요청 보내기
response = requests.get(url)

# 상태 코드 출력
print("상태 코드:", response.status_code)

# HTML의 첫 100자 출력
print("HTML의 첫 100자:")
print(response.text[:100])

