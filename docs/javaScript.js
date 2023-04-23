function sendEmail() {
    let username = document.querySelector(".userName").value
    let usermessage = document.getElementById('emsubject').value
    let useremail = document.querySelector(".e-mail--input").value

    emailjs.send("service_00gco5o","template_s0xjpre",{
        from_name: username +"\n"+ "E-mail: "+ useremail,
        message: usermessage,
    });
    alert("Το e-mail σας στάλθηκε");
}