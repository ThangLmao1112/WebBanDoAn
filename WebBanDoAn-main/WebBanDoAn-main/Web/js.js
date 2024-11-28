document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'thang' && password === '123') 
    {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
    } else {
        alert('Sai tài khoản hoặc mật khẩu');
    }
});
