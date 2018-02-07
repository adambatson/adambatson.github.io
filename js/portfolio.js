$(document).ready(function() {

	$(".dropdown").on('click', function() {
		$(this).next(".dropdownContent").toggle();
	});

});