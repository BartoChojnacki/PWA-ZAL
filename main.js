const userName = document.querySelector('#username');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendButton = document.querySelector('.send');
const clearButton = document.querySelector('.clear');
const form = document.querySelector('#form');

function showErrorMessage(input, message) {
    const box = input.parentElement
    const errorMessage = box.querySelector('.error')
    errorMessage.textContent = message
}

function hideErrorMessage(input) {
    const box = input.parentElement
    const errorMessage = box.querySelector('.error')
    errorMessage.textContent = ''
}

function checkPassowrds(password1, password2) {
    if (password1.value !== password2.value) {
        showErrorMessage(password2, 'Hasła są różne!')
    } else {
        hideErrorMessage(password2)
    }
}

function checkInputsLength(input, minValue) {
    if(input.value.length < minValue) {
        showErrorMessage(input, `Pole powinno zawierać minimum ${minValue} znaków`)
    } else {
        hideErrorMessage(input)
    }
}

function checkEmail (email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!(regex.test(email.value))) {
        showErrorMessage(email, 'Adres email nieprawidłowy')
    } else {
        hideErrorMessage(email)
    }
}

sendButton.addEventListener('click', e => {
    e.preventDefault();
    // funkcje, któe będą wywoływane po kliknięciu w przyciskch
    checkPassowrds(password1, password2);
    checkInputsLength(userName, 5)
    checkInputsLength(password1, 8)
    checkEmail(email)
})

clearButton.addEventListener('click', e => {
    e.preventDefault()
    // funkcje, które będą wywoływane po kliknięciu w przycisk

    // userName.value = ''
    // password1.value = ''
    // password2.value = ''
    // email.value = ''

    form.reset()
    const errors = document.querySelectorAll('.error')
    errors.forEach(err => {
        err.textContent = ''
    })

})