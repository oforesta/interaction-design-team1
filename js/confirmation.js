function sendEmail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    }

    emailjs.send("service_jkr2ytg", "template_dsusvwx", parms)
}