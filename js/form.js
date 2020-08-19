const serviceSubmit = document.querySelector('.service-form__btn');

const formHandler = () => {
  fetch('http://hsolutions.uk/jamie/confirm.php')
    .then(response => JSON.parse(response))
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

serviceSubmit.addEventListener('click', formHandler);