$('.alert').hide();

async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        $('.alert').hide();
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
            username,
            email,
            password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        document.getElementById("signup-form").reset();
        //check response status
        console.log(response)
        if(response.ok) {
            $('#successSignUp').show();
        } else {
            $('#failedSignUp').show();
        }
    } else {
        $('#missingSignUp').show()
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
        $('.alert').hide();
        document.getElementById("login-form").reset();
        const response = await fetch('/api/users/login', {
            method: 'post',
                body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        //check response status
        if(response.ok) {
            document.location.replace('/');
        } else {
            $('#failedLogin').show();
        }
    } else {
        $('#missingLogin').show();
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);