const passwordBox = document.getElementById("password");
let length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

const allChars = upperCase + lowerCase + number ;

 function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(password.length < length ){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
 }
function changeValue(){
    length = 3;
    document.getElementById('dr-but').textContent = 3;
}
function changeValue4(){
    length = 4;
    document.getElementById('dr-but').textContent = 4;
}
function changeValue5(){
    length = 5;
    document.getElementById('dr-but').textContent = 5;
}
function changeValue6(){
    length = 6;
    document.getElementById('dr-but').textContent = 6;
}
function changeValue7(){
    length = 7;
    document.getElementById('dr-but').textContent = 7;
}
function changeValue8(){
    length = 8;
    document.getElementById('dr-but').textContent = 8;
}
function changeValue9(){
    length = 9;
    document.getElementById('dr-but').textContent = 9;
}
function changeValue10(){
    length = 10;
    document.getElementById('dr-but').textContent = 10;
}
function changeValue11(){
    length = 11;
    document.getElementById('dr-but').textContent = 11;
}
function changeValue12(){
    length = 12;
    document.getElementById('dr-but').textContent = 12;
}
function changeValue13(){
    length = 13;
    document.getElementById('dr-but').textContent = 13;
}
function changeValue14(){
    length = 14;
    document.getElementById('dr-but').textContent = 14;
}
function changeValue15(){
    length = 15;
    document.getElementById('dr-but').textContent = 15;
}