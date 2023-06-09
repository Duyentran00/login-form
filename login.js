window.onload = function () {
  const loginContainer = document.querySelector('.login-container');
  const signupContainer = document.querySelector('.signup-container');
  const loginLink = document.getElementById('login-link');
  const signupLink = document.getElementById('signup-link');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  // Ẩn biểu mẫu đăng ký khi trang được tải
  signupContainer.style.display = 'none';

  // Chuyển đổi giữa đăng nhập và đăng ký
  loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
  });

  signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
  });


  // Hiển thị thông báo lỗi khi blur ra khỏi ô input 
  // và ẩn thông báo lỗi khi người dùng nhập vào ô input
  const loginInputs = loginForm.querySelectorAll('input');
  const signupInputs = signupForm.querySelectorAll('input');

  loginInputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      const errorMessage = this.nextElementSibling;
      if (this.value === '') {
        errorMessage.classList.add('error');
      } else {
        errorMessage.classList.remove('error');
      }
    });

    input.addEventListener('input', function () {
      const errorMessage = this.nextElementSibling;
      errorMessage.classList.remove('error');
    });
  });

  signupInputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      const errorMessage = this.nextElementSibling;
      if (this.value === '') {
        errorMessage.classList.add('error');
      } else {
        errorMessage.classList.remove('error');
      }
    });

    input.addEventListener('input', function () {
      const errorMessage = this.nextElementSibling;
      errorMessage.classList.remove('error');
    });
  });



  // Hàm kiểm tra giá trị nhập vào trong biểu mẫu đăng nhập
  function validateLoginForm() {
    const usernameInput = loginForm.querySelector('#username');
    const passwordInput = loginForm.querySelector('#password');

    if (usernameInput.value.trim() === '') {
      displayErrorMessage(usernameInput, 'Vui lòng nhập tên đăng nhập của bạn');
      return false;
    }

    if (passwordInput.value.length < 7) {
      displayErrorMessage(passwordInput, 'Vui lòng nhập tối thiểu 7 kí tự');
      return false;
    }

    return true;
  }
  

  // Hàm kiểm tra giá trị nhập vào trong biểu mẫu đăng ký
  function validateSignupForm() {
    const fullnameInput = signupForm.querySelector('#fullname');
    const emailInput = signupForm.querySelector('#email');
    const usernameInput = signupForm.querySelector('#new-username');
    const passwordInput = signupForm.querySelector('#new-password');
    const confirmPasswordInput = signupForm.querySelector('#password_confirmation');

    if (fullnameInput.value.trim() === '') {
      displayErrorMessage(fullnameInput, 'Vui lòng nhập họ và tên của bạn');
      return false;
    }

    if (!validateEmail(emailInput.value)) {
      displayErrorMessage(emailInput, 'Trường này chưa phải là email');
      return false;
    }

    if (usernameInput.value.trim() === '') {
      displayErrorMessage(usernameInput, 'Vui lòng nhập tên đăng nhập của bạn');
      return false;
    }

    if (passwordInput.value.length < 7) {
      displayErrorMessage(passwordInput, 'Vui lòng nhập tối thiểu 7 kí tự');
      return false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      displayErrorMessage(confirmPasswordInput, 'Vui lòng nhập lại mật khẩu');
      return false;
    }

    return true;
  }

  

  // Hàm kiểm tra định dạng email
  function validateEmail(email) {
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return regExEmail.test(email);
  }

  // Hàm hiển thị thông báo lỗi cho một input
  function displayErrorMessage(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = 'inline';
  }

    // Xử lý sự kiện submit form
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validateLoginForm();
      // Thực hiện xử lý đăng nhập
      console.log('Đăng nhập');
    });
  
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      validateSignupForm();
      // Thực hiện xử lý đăng ký
      console.log('Đăng ký');
    });
};
