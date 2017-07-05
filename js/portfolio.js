var upArrow = "\u2191";
var downArrow = "\u2193";

$(document).ready(function () {
    $(".pf-entry-wrap").each(function(i, obj) {
    	$(this).find(".pf-details-wrap").slideUp(400);
    	$(this).find(".pf-arrow").html(downArrow);
    	$(this).on("click", function() {
    		$(this).find(".pf-details-wrap").slideToggle(400);
    		var arrow = $(this).find(".pf-arrow");
    		arrow.text((arrow.text() == upArrow) ? downArrow : upArrow);
    	});
    });
});

