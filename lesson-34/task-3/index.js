document.addEventListener('DOMContentLoaded', () => {
  const formElem = document.querySelector('.login-form');
  const submitButton = formElem.querySelector('.submit-button');
  const inputs = formElem.querySelectorAll('input');

  const checkFormValidity = () => {
    const isValid = [...inputs].every(input => input.checkValidity());
    submitButton.disabled = !isValid;
  };

  const handleInput = (event) => {
    checkFormValidity();
    event.target.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(formElem);
    const formObject = Object.fromEntries(formData.entries());

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    })
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
      checkFormValidity();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error creating user');
    });
  };

  inputs.forEach(input => input.addEventListener('input', handleInput));
  formElem.addEventListener('submit', handleSubmit);
  checkFormValidity();
});