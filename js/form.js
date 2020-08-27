const serviceForm = document.querySelector('.service-form');
const formValidationURL = 'http://hsolutions.uk/jamie/confirm.php'

const formHandler = (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(formValidationURL, {
    method: 'post',
    body: formData
  }).then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.error(error))

  // fetch('http://hsolutions.uk/jamie/confirm.php')
  //   .then(response => JSON.parse(response))
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
}

serviceForm.addEventListener('submit', (e) => formHandler(e, serviceForm));