const pass = document.getElementById("password");
const length = 10;
const upperCase = "BCDEFGHIJKLMN";
const lowerCase = "bcdefghijkmnopqrSt";
const num = "0123456789";
const char = "*@+$&";

const allChars = upperCase + lowerCase + num + char;

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += char[Math.floor(Math.random() * char.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    pass.value = password;
}

function copyPassword() {
    if (!pass.value) {
        createPassword(); 
    }
    pass.select(); 
    document.execCommand("copy"); 
    Swal.fire({
        title: 'Password Copied!',
        text: 'Password copied to clipboard!',
        icon: 'success',
        confirmButtonText: 'Okay'
    }); 
}