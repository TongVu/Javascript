var button = document.getElementById('submit-btn');
var nameInput = document.getElementById('name');
var email = document.getElementById('email');
var usersList = document.getElementById('users');
var message = document.getElementById('sms');


button.addEventListener('click', function (event) {
    event.preventDefault();

    message.style.display = 'block';
    if (nameInput.value === '' || email.value === '') {
        message.style.backgroundColor = 'lightcoral';
        message.innerText = 'Please enter fields!';
        setTimeout(() => message.style.display = 'none', 2000);
    }
    else {
        message.style.backgroundColor = 'lightgreen';
        message.innerText = 'Success';
        setTimeout(() => message.style.display = 'none', 2000);

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} - ${email.value}`));

        usersList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        email.value = '';
    }
});