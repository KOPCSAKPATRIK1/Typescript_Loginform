
document.addEventListener('DOMContentLoaded', () => {

    console.log('Loaded')

    //felhasznalonev
    document.getElementById('username')?.addEventListener('change', (e) => {
        let username = e.currentTarget as HTMLInputElement;
        let usernameHiba = document.getElementById('usernameHiba') as HTMLLabelElement;

        console.log(username.value, username.value.length);

        if (username.value.includes("&") || username.value.includes("=") || username.value.includes("_") || username.value.includes("'") || username.value.includes("-") 
            || username.value.includes("+") || username.value.includes(",") || username.value.includes("<") || username.value.includes(">") || username.value.includes('.'))
        {
           console.log('username hiba (tiltott karakter)');
           document.getElementById('usernameHiba')!.innerHTML = 'Tiltott karaktert használsz';

           username.style.color = "Red";
           usernameHiba.innerText = 'Tiltott karaktert használsz';
           usernameHiba.style.color = "Red"; 
        }
        else if(username.value.length < 6  || username.value.length > 30)
        {
            username.style.color = "Red";
            usernameHiba.innerText = '6-30 karakter hosszúságúnak kell lennie';
            usernameHiba.style.color = "Red"; 
            console.log('username hiba (rovid/hosszu)');
        }
        else if(/[0-9]/.test(username.value.charAt(0)))
        {
            username.style.color = "Red";
            usernameHiba.innerText = 'Felhasználónév nem kezdőthet számmal';
            usernameHiba.style.color = "Red";
            console.log('username hiba (szammalkezdodik)'); 
        }
        else if(username.value.charAt(0).includes('.'))
        {
            username.style.color = "Red";
            usernameHiba.innerText = 'Felhasználónév nem kezdőthet .-al';
            usernameHiba.style.color = "Red";
            console.log('username hiba (ponttal kezdodik)'); 
        }
        else
        {
            usernameHiba.innerText = '';
            username.style.color = "White";
        }
    });

    //email
    document.getElementById('email')?.addEventListener('change', (e) => {
        let email = e.currentTarget as HTMLInputElement;
        let emailHiba = document.getElementById('emailHiba') as HTMLLabelElement;

        if (!email.value.includes('@'))
        {
            emailHiba.innerText = '@ karakter kotelező!';
            emailHiba.style.color = "Red";
            email.style.color = "Red";
            console.log('email hiba');
        }
        else
        {//https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
            emailHiba.innerText = '';
            email.style.color = "White";
        }


    });


    document.getElementById('password')?.addEventListener('change', (e) => {
        let password = e.currentTarget as HTMLInputElement;
        let passwordHiba = document.getElementById('passwordHiba') as HTMLLabelElement;



    });

});