function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

$(document).ready(function() {

	$("#contactSubmit").on('click', function(e) {
		e.preventDefault();
		if(!validateEmail($(".email").val())) {
			alert("Please enter a valid email address");
			$(".email").css("border", "1px solid red");
			return false;
		}
		$(".email").css("border", "0");
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
				$(".name").val("");
				$(".email").val("");
				$(".message").val("");
			}
		});
	});
});