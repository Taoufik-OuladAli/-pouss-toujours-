
var formValid = document.getElementById('bouton');
var prenom = document.getElementById('prenom');
var nom = document.getElementById('nom');
var tel = document.getElementById('telephone');
var mail = document.getElementById('mail');

var missPrenom = document.getElementById('missPrenom');
var missNom = document.getElementById('missNom');
var missTel = document.getElementById('missTel');
var missMail = document.getElementById('missMail');

var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var telValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
var mailValid = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
var msg = document.getElementById('msg');
textarea = document.getElementById('message');

formValid.addEventListener('click', validation);
function validation(event){
    // si le champ est vide
    if(prenom.validity.valueMissing){
        event.preventDefault()
        missPrenom.textContent = 'Prenom manquant';
        missPrenom.style.color = 'red';
    }

    //si le format de données est incorrect
    
    else if (prenomValid.test(prenom.value) == false){
        event.preventDefault();
        missPrenom.textContent = 'Format incorrect';
        missPrenom.style.color = 'orange';
    }

    if(nom.validity.valueMissing){
        event.preventDefault()
        missNom.textContent = 'Nom manquant';
        missNom.style.color = 'red';
    }
    else if (prenomValid.test(nom.value) == false){
        event.preventDefault();
        missNom.textContent = 'Format incorrect';
        missNom.style.color = 'orange';
    }

    if(tel.validity.valueMissing){
        event.preventDefault()
        missTel.textContent = 'Tel manquant';
        missTel.style.color = 'red';
    }
    else if (telValid.test(tel.value) == false){
        event.preventDefault();
        missTel.textContent = 'Format incorrect';
        missTel.style.color = 'orange';
    }

    if(mail.validity.valueMissing){
        event.preventDefault()
        missMail.textContent = 'Mail manquant';
        missMail.style.color = 'red';
    }
    else if (mailValid.test(mail.value) == false){
        event.preventDefault();
        missMail.textContent = 'Format incorrect';
        missMail.style.color = 'orange';
    }

    if((!textarea.lenght > 20) || (!textarea.lenght < 250)){
        msg.textContent = 'Ce champ est compris entre 20 et 244 caractères !'
        msg.style.color = 'red'
    }
}
