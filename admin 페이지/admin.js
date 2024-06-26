const darkModeButton = document.getElementById('darkModeButton');
const queryButton = document.getElementById('queryButton'); // 조회 버튼 ID에 맞게 변경 필요
const selectAllCheckbox = document.getElementById('selectAll'); // 전체 선택 체크박스

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // body에 dark-mode 클래스를 toggle하여 다크모드 전환

    // 페이지 네이션 버튼의 텍스트 색상 설정
    updatePaginationTextColor();
});

// 초기 로드 시 적용
updatePaginationTextColor();

// 페이지 네이션 버튼 텍스트 색상 업데이트 함수
function updatePaginationTextColor() {
    const pageLinks = document.querySelectorAll('.page-link');

    pageLinks.forEach(link => {
        if (document.body.classList.contains('dark-mode')) {
            link.style.color = '#444'; // 다크모드일 때 검정색으로 설정
        } else {
            link.style.color = '#007bff'; // 기본모드일 때 원래 색상(blue)으로 설정
        }
    });
}

// 버튼 텍스트 색상 업데이트 함수
function updateButtonTextColor() {
    const buttons = document.querySelectorAll('.btn.btn-outline-primary');

    buttons.forEach(button => {
        if (document.body.classList.contains('dark-mode')) {
            button.style.color = '#fff'; // 다크모드일 때 흰색으로 설정
        } else {
            button.style.color = '#007bff'; // 기본모드일 때 원래 색상(blue)으로 설정
        }
    });
}

// 페이지 네이션 버튼 이벤트 처리
document.querySelectorAll('.page-link').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        if (item.textContent === 'Previous') {
            currentPage = currentPage > 1 ? currentPage - 1 : 1;
        } else if (item.textContent === 'Next') {
            currentPage = currentPage < Math.ceil(data.length / itemsPerPage) ? currentPage + 1 : currentPage;
        } else {
            currentPage = parseInt(item.textContent);
        }

        renderTableData();
    });
});
