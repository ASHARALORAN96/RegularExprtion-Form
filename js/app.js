'use strict'
const form = document.forms.regxForm
const fields = document.querySelectorAll('.regx');

const pConfirem = document.getElementById('confirmpasswordP');
const inputCP = document.getElementById('inputConfirmPassword');
const inputP = document.getElementById('inputPassword');

const patterns = {
    username: /^[\w\.-]{5,12}$/i,
    email: /^([\w\.-]+)@([\w]{3,12})\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    password: /^[A-Z][\w@_]{8,20}$/,
    mobilePhone: /^07[\d]{8}$/,
    description: /^[a-z\d-]{8,20}$/
}


function validation(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
};

fields.forEach(input => {
    input.addEventListener('keyup', e => {
        validation(e.target, patterns[e.target.attributes.name.value]);
    });

});
form.confirmPassword.addEventListener('change', e => {
    e.preventDefault();
    // console.log(form.password.value)
    if (e.target.value !== form.password.value) {
        pConfirem.classList.add("confirmpasswordP");
        inputCP.classList.add('invalid');
    } else if (e.target.value == form.password.value) {
        pConfirem.classList.remove('confirmpasswordP')
        inputCP.classList.add('valid');
    }
});









