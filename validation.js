function register() {

    let username = document.querySelector('.username').value;
    let mail = document.querySelector('.mail').value;
    let password = document.querySelector('.password').value;
    let confirmPassword = document.querySelector('.confirmPassword').value;
    if (username != '' && mail != '' && password != '' && confirmPassword != '') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            document.getElementById("error").innerHTML = "Invalid email format";
            return; // Prevent further execution
        }
        if (password.length >= 8 && password.length <= 16 && confirmPassword.length >= 8 && confirmPassword.length <= 16) {
            if (password === confirmPassword) {
                window.location.href = "welcome.html";
            }
            else {
                document.getElementById("error").innerHTML = "Please enter correct Password";
            }
        }
        else {
            document.getElementById("error").innerHTML = "Password must be between 8 and 16 characters";
        }
    }
    else {
        alert("Please Fill All The Details");
    }
}