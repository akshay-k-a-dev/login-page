function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
    // Ensure that the input field maintains its focus
    passwordInput.focus();
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Example validation (you may use more robust methods)
    if (email === "admin@example.com" && password === "password") {
        // If credentials are correct, redirect to another page
        window.location.href = "welcome.html";
    } else {
        // If credentials are incorrect, display an error message
        document.getElementById("error").innerText = "Invalid email or password";
    }
});
