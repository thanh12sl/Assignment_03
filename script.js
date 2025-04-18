// Lấy các phần tử DOM cần thiết cho Laptop và Mobile
const emailFormLaptop = document.getElementById('email-form-laptop');
const emailInputLaptop = document.getElementById('email-input-laptop');
const emailFormMobile = document.getElementById('email-form-mobile');
const emailInputMobile = document.getElementById('email-input-mobile');
const emailFormContainerLaptop = document.getElementById('email-form-container-laptop');
const personalInfoContainerLaptop = document.getElementById('personal-info-container-laptop');
const errorMessageLaptop = document.getElementById('error-message-laptop');

const emailFormContainerMobile = document.getElementById('email-form-container-mobile');
const personalInfoContainerMobile = document.getElementById('personal-info-container-mobile');
const errorMessageMobile = document.getElementById('error-message-mobile');

// Hàm kiểm tra email hợp lệ với regex
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Xử lý sự kiện khi form Laptop được submit
emailFormLaptop.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    const email = emailInputLaptop.value.trim();

    // Kiểm tra email hợp lệ
    if (isValidEmail(email)) {
        // Nếu email hợp lệ, ẩn form và hiển thị thông tin cá nhân
        emailFormContainerLaptop.classList.add('hide');
        personalInfoContainerLaptop.classList.remove('hide');
        errorMessageLaptop.classList.add('hide'); // Ẩn thông báo lỗi nếu có
    } else {
        // Nếu email không hợp lệ, hiển thị lỗi
        errorMessageLaptop.classList.remove('hide');
    }
});

// Xử lý sự kiện khi form Mobile được submit
emailFormMobile.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    const email = emailInputMobile.value.trim();

    // Kiểm tra email hợp lệ
    if (isValidEmail(email)) {
        // Nếu email hợp lệ, ẩn form và hiển thị thông tin cá nhân
        emailFormContainerMobile.classList.add('hide');
        personalInfoContainerMobile.classList.remove('hide');
        errorMessageMobile.classList.add('hide'); // Ẩn thông báo lỗi nếu có
    } else {
        // Nếu email không hợp lệ, hiển thị lỗi
        errorMessageMobile.classList.remove('hide');
    }
});
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const parent = button.parentElement;
        const content = parent.querySelector('.interests-content') ||
            parent.querySelector('.skills-content') ||
            parent.querySelector('.education-content') ||
            parent.querySelector('.languages-content');

        if (content) {
            content.classList.toggle('hide');
            button.textContent = content.classList.contains('hide') ? 'View More' : 'View Less';
        }
    });
});