var upArrow = "\u2191";
var downArrow = "\u2193";

$(document).ready(function () {
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
});

