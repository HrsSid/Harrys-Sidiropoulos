function sendEmailProject() {
    let projectName = document.querySelector(".projectName").value;
    let projectbudget = document.querySelector(".budget").value;
    let projectDetails = document.getElementById("projectDetails").value;
    let useremail = document.querySelector(".email-input-project").value;

    emailjs.send("service_00gco5o","template_nhpcjqn",{
        from_name: projectName +"\nE-mail: "+ useremail +"\nBudget (in EURO): " + projectbudget,
        message: projectDetails,
    });
    alert("Your e-mail was sent successfully");
}