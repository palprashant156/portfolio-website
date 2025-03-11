document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("F35W0Ge0eyXyJ9dTM"); // Replace "YOUR_USER_ID" with your actual EmailJS User ID

    document.getElementById("submit-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the page from refreshing on form submission

        let name = document.querySelector("input[name='name']").value;
        let email = document.querySelector("input[name='email']").value;
        let subject = document.querySelector("input[name='subject']").value;
        let message = document.querySelector("textarea[name='message']").value;

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        let templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        emailjs.send("service_vb25ng4", "template_m9errw7", templateParams)
            .then(function (response) {
                alert("Message sent successfully!");
                document.querySelector(".form").reset(); // Clear the form after submission
            })
            .catch(function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});
