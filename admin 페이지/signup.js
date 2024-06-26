const form = document.getElementById("form");

// 전화번호 입력 필드에서 포맷팅을 위한 함수
function formatPhoneNumber(phoneNumber) {
    // 숫자만 남기고 나머지 문자 제거
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    
    // 국제 전화번호 형식으로 포맷팅
    let formatted = '';
    if (cleaned.length === 10) {
        formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (cleaned.length === 11) {
        formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '+$1 $2 $3');
    } else {
        formatted = cleaned; // 기타 형식은 그대로 표시
    }
    
    return formatted;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let userId = event.target.id.value;
    let userPw1 = event.target.pw1.value;
    let userPw2 = event.target.pw2.value;
    let userName = event.target.name.value;
    let userGender = event.target.gender.value;
    let userPhone = event.target.phone.value;
    let userEmail = event.target.email.value;
    let userAddress = event.target.address.value;

    // 이메일 유효성 검사 정규 표현식
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userEmail)) {
        alert("유효한 이메일 주소를 입력해주세요.");
        return;
    }

    // 비밀번호 길이 검사
    if (userId.length < 6) {
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
        return;
    }

    // 비밀번호 일치 여부 검사
    if (userPw1 !== userPw2) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    // 포맷팅된 전화번호 가져오기
    let formattedPhone = formatPhoneNumber(userPhone);

    // 가입 환영 메시지 출력
    document.body.innerHTML = "";
    document.write(`<p>${userId}님 환영합니다</p>`);
    document.write(`<p>회원 가입 시 입력하신 내역은 다음과 같습니다.</p>`);
    document.write(`<p>아이디: ${userId}</p>`);
    document.write(`<p>이름: ${userName}</p>`);
    document.write(`<p>전화번호: ${formattedPhone}</p>`);
    document.write(`<p>이메일: ${userEmail}</p>`);
    document.write(`<p>주소: ${userAddress}</p>`);

    // 회원가입 완료 후 admin.html로 리다이렉션
    setTimeout(function() {
        window.location.href = "admin.html"; // admin.html로 변경
    }, 1000); // 3초 후에 admin.html로 이동 
});

