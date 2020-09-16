const serviceForm = document.querySelector('.service-form');
const formValidationURL = 'http://hsolutions.uk/jamie/confirm.php'

const formHandler = (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(formValidationURL, {
    method: 'post',
    body: formData
  }).then(() => showFormAlert('success'))
    .then(() => resetForm())
    .catch(error => showFormAlert('fail', error))
}

serviceForm.addEventListener('submit', (e) => formHandler(e, serviceForm));

const resetForm = () => {
  form.reset();
}

const showFormAlert = (status, error) => {
  const formAlert = document.querySelector('.form-alert');
  const formAlertMsg = document.querySelector('.form-alert__message');
  if (status === 'success') {
    formAlert.classList.add('success');
    formAlertMsg.textContent = 'Request Sent. Please allow 24 hours for a response.';
    formAlert.classList.remove('hidden');
    formAlert.style.opacity = '1';
    window.setTimeout(() => formAlert.style.opacity = '0', 5000);
  } else {
    formAlert.classList.add('error');
    formAlertMsg.textContent = 'There was an error in sending your request, please try again later or contact via email.';
    formAlert.classList.remove('hidden');
    formAlert.style.opacity = '1';
    window.setTimeout(() => formAlert.style.opacity = '0', 5000);
    console.log(error);
  }
}