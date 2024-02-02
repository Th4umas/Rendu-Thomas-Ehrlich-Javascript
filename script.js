const themeButton = document.getElementById("theme");

function onClick() {
    document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('#email');

    if(email.value === ''){
        console.log("invalide");
    } else {
        email.classList.add('success');
        console.log('valide');
    }
});

let errorContainer = document.querySelector('.error');
let errorList = document.querySelector('.error ul');

errorList.innerHTML = "";
errorContainer.classList.remove('visible');

let email = document.querySelector('#email'); // Remove the extra dot before #email

if(email.value == ''){
    errorContainer.classList.add('visible');
    email.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
} else {
    email.classList.add('success');
}

let pseudo = document.querySelector('#pseudo');

if(pseudo.value.length < 6){
    errorContainer.classList.add('visible');
    pseudo.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = 'Le champ pseudo doit contenir au moins 6 caractères';

    errorList.appendChild(err);
} else {
    pseudo.classList.add('success');
}

let successContainer = document.querySelector('.success')
successContainer.classList.remove('visible')

if(
    pseudo.classList.contains('success') &&
    email.classList.contains('success')
){
    successContainer.classList.add('visible')
}
