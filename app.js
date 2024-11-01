const pass = document.getElementById("password");
const length = 10;
const upperCase = "BCDEFGHIJKLMN";
const lowerCase = "bcdefghijkmnopqrSt";
const num = "0123456789";
const char = "*@+$&";

const allChars = upperCase + lowerCase + num + char;

function createPassword() {
    let password = "";

    // Ensuring at least one character from each type
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += char[Math.floor(Math.random() * char.length)];

    // Fill the rest of the password to meet the required length
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password for randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Set the generated password to the input field
    pass.value = password;
}

function copyPassword() {
    pass.select(); // Select the password text
    document.execCommand("copy"); // Copy to clipboard
    Swal.fire({
        title: 'Password Copied!',
        text: 'Password copied to clipboard!',
        icon: 'success',
        confirmButtonText: 'Okay'
    }); // Show confirmation message with SweetAlert
}
