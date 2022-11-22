function sendMail(contactForm) {
    emailjs.send("service_8e493s7","rosie",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAIL", error);
            }
        );
        return false;
}

