$(document).ready(function() {

	$("#contactSubmit").on('click', function(e) {
		e.preventDefault();
		$.ajax({
			dataType: 'jsonp',
			url: "http://getsimpleform.com/messages/ajax?form_api_token=f67041d6f71c5c71a27b72256dbae882",
			data: {
				name: $(".name").val(),
				email: $(".email").val(),
				message: $(".message").val()
			},
			success: function(res) {
				alert("Thank you for contacting me, I'll be in touch shortly!");
			}
		});
	});
});