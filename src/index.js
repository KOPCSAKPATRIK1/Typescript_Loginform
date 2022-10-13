"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b;
    console.log('Loaded');
    (_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => {
        let username = e.currentTarget;
        let usernameHiba = document.getElementById('usernameHiba');
        console.log(username.value, username.value.length);
        if (username.value.includes("&") || username.value.includes("=") || username.value.includes("_") || username.value.includes("'") || username.value.includes("-")
            || username.value.includes("+") || username.value.includes(",") || username.value.includes("<") || username.value.includes(">") || username.value.includes('.')) {
            console.log('username hiba');
            document.getElementById('usernameHiba').innerHTML = 'Tiltott karaktert használsz';
            username.style.color = "Red";
            usernameHiba.innerText = 'Tiltott karaktert használsz';
            usernameHiba.style.color = "Red";
        }
        else if (username.value.length < 6 || username.value.length > 30) {
            username.style.color = "Red";
            usernameHiba.innerText = '6-30 karakter hosszúságúnak kell lennie';
            usernameHiba.style.color = "Red";
        }
        /*
        else if(isNaN(username.value.charAt(0))) {}
        */
        else {
            usernameHiba.innerText = '';
            username.style.color = "White";
        }
    });
    (_b = document.getElementById('password')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', (e) => {
        let password = e.currentTarget;
        let passwordHiba = document.getElementById('passwordHiba');
        let email = document.getElementById('password');
        let emailHiba = document.getElementById('emailHiba');
    });
});
