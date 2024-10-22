const submitForm = document.querySelector('.message-form'); 


submitForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;

    alert('Pesan anda terkirim !');

    submitForm.reset();
});
