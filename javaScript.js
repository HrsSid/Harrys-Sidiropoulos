function sendEmailProject() {
    let projectName = document.querySelector(".projectName").value;
    let projectbudget = document.querySelector(".budget").value;
    let projectDetails = document.getElementById("projectDetails").value;
    let useremail = document.querySelector(".email-input-project").value;

    emailjs.send("service_00gco5o","template_nhpcjqn",{
        from_name: "Project Name: "+ projectName +"\nE-mail: "+ useremail +"\nBudget (in EURO): " + projectbudget,
        message: projectDetails,
    });
    alert("Your project was sent successfully");
}
function sendEmail() {
    let username = document.querySelector(".userName").value
    let usermessage = document.getElementById('emailSubject').value
    let useremail = document.querySelector(".email-input-contact").value

    emailjs.send("service_00gco5o","template_nhpcjqn",{
        from_name: "Name: "+ username +"\n"+ "E-mail: "+ useremail,
        message: usermessage,
    });
    alert("Your e-mail was sent successfully");
}