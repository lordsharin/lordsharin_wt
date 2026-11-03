const form = document.getElementById("registrationForm");

// Get input fields
const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Get error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");


// When user clicks Register
form.addEventListener("submit", function(event) {

    // Prevent actual form submission
    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // ---------------- NAME VALIDATION ----------------

    if (name.value.trim() === "") {

        nameError.textContent = "Name is required";

        isValid = false;
    }


    // ---------------- EMAIL VALIDATION ----------------

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required";

        isValid = false;

    } else if (!emailPattern.test(email.value)) {

        emailError.textContent = "Enter a valid email";

        isValid = false;
    }


    // ---------------- MOBILE VALIDATION ----------------

    const mobilePattern = /^[0-9]{10}$/;

    if (mobile.value.trim() === "") {

        mobileError.textContent = "Mobile number is required";

        isValid = false;

    } else if (!mobilePattern.test(mobile.value)) {

        mobileError.textContent = "Mobile number must contain 10 digits";

        isValid = false;
    }


    // ---------------- PASSWORD VALIDATION ----------------

    if (password.value === "") {

        passwordError.textContent = "Password is required";

        isValid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        isValid = false;
    }


    // ---------------- CONFIRM PASSWORD ----------------

    if (confirmPassword.value === "") {

        confirmPasswordError.textContent =
            "Please confirm your password";

        isValid = false;

    } else if (confirmPassword.value !== password.value) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        isValid = false;
    }


    // ---------------- SUCCESS ----------------

    if (isValid) {

        successMessage.textContent =
            "Registration successful!";

        // Clear the form
        form.reset();
    }

});
