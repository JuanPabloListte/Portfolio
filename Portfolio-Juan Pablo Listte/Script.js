const cvButton = document.getElementById("cvButton")

cvButton.addEventListener('click', () => {
    const pdfUrl = 'https://drive.google.com/file/d/1-knNk-7gJJuejdBXfiKLEQjdQ6v3_HoR/view?usp=drive_link';

    const link = document.createElement('a')
    link.href = pdfUrl
    link.target = '_blank'
    link.download = 'Curriculum Vitae - Juan Pablo Listte - English.pdf'

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
})

const btn = document.getElementById('button');

document.getElementById('myForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_fg1g0tj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent correctly!');
      myForm.reset()
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


window.onload(myForm.reset());
