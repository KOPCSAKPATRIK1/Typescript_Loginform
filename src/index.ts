
document.addEventListener('DOMContentLoaded', () => {


    console.log('Loaded')
    document.getElementById('username')?.addEventListener('change', (e) : void => {
        let username = e.currentTarget as HTMLInputElement;
        let usernameHiba = document.getElementById('usernameHiba') as HTMLLabelElement;

        console.log(username.value, username.value.length);

        if (username.value.includes("&") || username.value.includes("=") || username.value.includes("_") || username.value.includes("'") || username.value.includes("-") 
            || username.value.includes("+") || username.value.includes(",") || username.value.includes("<") || username.value.includes(">") || username.value.includes('.'))
        {
           console.log('username hiba');
           document.getElementById('usernameHiba')!.innerHTML = 'Tiltott karaktert használsz';

           username.style.color = "Red";
           usernameHiba.innerText = 'Tiltott karaktert használsz';
           usernameHiba.style.color = "Red"; 
        }
        else if(username.value.length < 6 || username.value.length > 30)
        {
            username.style.color = "Red";
            usernameHiba.innerText = '6-30 karakter hosszúságúnak kell lennie';
            usernameHiba.style.color = "Red"; 
        }
        else if(isNaN(username.value.charAt(0)))
        {
            username.style.color = "Red";
            usernameHiba.innerText = '6-30 karakter hosszúságúnak kell lennie';
            usernameHiba.style.color = "Red"; 
        }
        else
        {
            usernameHiba.innerText = '';
            username.style.color = "White";
        }
    });


    document.getElementById('password')?.addEventListener('change', (e) => {
        let password = e.currentTarget as HTMLInputElement;
        let passwordHiba = document.getElementById('passwordHiba') as HTMLLabelElement;
        let email = document.getElementById('password') as HTMLInputElement;
        let emailHiba = document.getElementById('emailHiba') as HTMLLabelElement;



    });

});