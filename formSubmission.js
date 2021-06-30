const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById('contact');
    let formData = new FormData(myForm);
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log('Form successfully submitted'))
        .catch((error) => alert(error));

    document.getElementById('success').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('success').classList.add('hidden')}
        , 10000);
};
document.querySelector('form').addEventListener('submit', handleSubmit);