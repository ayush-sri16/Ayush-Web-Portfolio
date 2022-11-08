AOS.init();

// script for google sheet

var scriptURL = "https://script.google.com/macros/s/AKfycbyQQIG7WO20Z1suwhxB9t2bkoLDg89I5XnjXC6Q45264DGXicZcDjAewj_tFfCn0TC7/exec";
var form = document.forms["portfolio-form"];
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
});