var upArrow = "\u2191";
var downArrow = "\u2193";

function pageScroll(duration) {

    $('a.scroll').each(function(i, obj) {
        $(this).on('click', function(event) {
            var target = $( $(this).attr('href'));
            if(target.length) {
                event.preventDefault();
                $('html, body').animate( {
                    //scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
                    scrollTop: target.offset().top
                }, duration);
            }
        });
    });
}

$(document).ready(function () {
    //scrolling
    pageScroll(450);

    //Portfolio accordion
    $(".pf-entry-wrap").each(function(i, obj) {
    	$(this).find(".pf-details-wrap").slideUp(400);
    	$(this).find(".pf-arrow").html(downArrow);
    	$(this).find("h3").each(function(j, h3) {
    		$(this).on("click", function() {
    			$(this).siblings(".pf-details-wrap").slideToggle(400);
	    		var arrow = $(this).siblings(".pf-arrow");
	    		arrow.text((arrow.text() == upArrow) ? downArrow : upArrow);
    		});
    	});
    });

    //Contact form
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/adamjbatson@gmail.com", 
            method: "POST",
            data: $("#contactForm").serialize(),
            dataType: "json",
            success: function(data) {
                console.log(data);
                $("#contactFormDiv").fadeOut(400);
                $("#thanksDiv").show();
            }
        });
        return false;
    });
});