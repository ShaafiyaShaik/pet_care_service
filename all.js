//registration form
function showRegistration() {
    document.getElementById('registration-form').style.display = 'flex';
    document.querySelector('.hero').style.display = 'none';
    }

//login form:
document.querySelector('#loginForm4').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;

    if (email === '' || password === '' || mobile === '') {
        alert('Please fill in all fields: email, password, and mobile number.');
    } else {
        const messageContainer = document.querySelector('.message4');
        messageContainer.textContent = 'You have successfully logged in.';
        messageContainer.style.color = 'green'; 

        setTimeout(function() {
            window.location.href = 'all.html'; 
        }, 1000);
    }
});

document.querySelector('.reset-btn').addEventListener('click', function() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('mobile').value = '';
    document.querySelector('.message4').textContent = ''; 
});