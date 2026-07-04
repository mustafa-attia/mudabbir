var emailInput = document.getElementById('floatingInput');
var passwordInput = document.getElementById('floatingPassword');


function validateForm() {
    var email = "Mustafa@gmail.com"
    var password = "123456"

    if (emailInput.value === email && passwordInput.value === password) {
        alert("Login successful!");
        window.location.href = "./pages/dashboard.html";
        return true;
    } else {
        alert("Invalid email or password.");
        return false;
    }

}       