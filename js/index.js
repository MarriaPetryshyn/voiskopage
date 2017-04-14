document.querySelector('input[type=submit]').addEventListener('click', sendForm);
function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
	  e.preventDefault();
	  $.ajax({
            url: "https://formspree.io/petryshyn.tic@gmail.com", 
            method: "POST",
            data: {
                name: $('#visitor-name').val(),
                surname: $('#visitor-surname').val(),
                email: $('#visitor-email').val()
            },
            dataType: "json"
            })
            .done(function() {
                $('#message').html('Thank you for joining the community!');
            });
  }
}