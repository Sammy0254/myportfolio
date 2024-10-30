function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
            
        } 
        emailjs.send("service_9beeu99", "template_99aw7ei", params).then(function (res){
            alert("Success!" + res.status)
        })
        .catch(error => {
            alert("Failed to send message. Please try again later.");
        });
    }