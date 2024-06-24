//자바스크립트를 통해 제출된 내용을 받아주는 코드 제작
//제출된 이벤트를 받는다 (이벤트 핸들링)
const form = document.getElementById("form")

form.addEventListener("submit", function(event){//function(){} 이름없이 쓰이는 함수 :익명함수
    event.preventDefault() //기존 기능 차단, submit 기능으로 새로고침되는 것을 차단함


    //제출된 입력 값들을 참조한다

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userGender = event.target.gender.value
    let userPhone = event.target.phone.value
    let userEmail = event.target.email.value
    let userPosition = event.target.position.value
    let userIntro = event.target.intro .value
 

if(userId.length < 6){
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
    return; // 함수 강제 종료
}
//입력값에 문제가 있는 경우 이를 감지한다 ex) 비밀번호 일치

if(userPw1 !== userPw2){
    alert("비밀번호가 일치하지 않습니다.")
    return;
}
//가입 환영 인사를 제공한다
document.body.innerHTML = ""
document.write(`<p>${userId}님 환영합니다</P>`)
document.write(`<p>회원 가입 시 입력하신 내역은 다음과 같습니다.</P>`)
document.write(`<p>아이디:${userId}</P>`)
document.write(`<p>이름:${userName}</P>`)
document.write(`<p>전화번호:${userPhone}</P>`)
document.write(`<p>원하는 직무 :${userPosition}</P>`)

}) 
