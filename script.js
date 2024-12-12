(function(){
    emailjs.init("28FW50wJYgVGY2g2_");
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(this)
    emailjs.sendForm('service_7e8mslg', 'template_xgjumo7', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
