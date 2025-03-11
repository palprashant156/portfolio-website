// document.querySelector('.form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission
  
//     // Send the email using EmailJS
//     emailjs.sendForm('service_vb25ng4', 'template_m9errw7', this)
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Message sent successfully!');
//       }, function(error) {
//         console.log('FAILED...', error);
//         alert('Failed to send the message, please try again.');
//       });
  
//     // Optionally, reset the form after submission
//     this.reset();
//   });