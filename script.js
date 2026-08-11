document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let course = document.getElementById("course").value;
    let terms = document.getElementById("terms").checked;

    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" ||
        password === "" || course === "") {

        message.innerHTML = "Please fill all required fields.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must contain at least 6 characters.";
        message.style.color = "red";
        return;
    }

    if (!terms) {
        message.innerHTML = "Please accept the terms and conditions.";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    document.getElementById("registrationForm").reset();
});