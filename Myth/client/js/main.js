/*new*/

this.screenshotPreview = function(){
	/* CONFIG */

		xOffset = - 30;
		yOffset = - 230;

		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result

	/* END CONFIG */
	$("a.screenshot").hover(function(e){
		this.t = this.title;
		this.title = "";
		var preview = $(this).data('preview');
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='screenshot'><img src='"+ preview +"' alt='Template Preview' />"+ c +"</p>");
		$("#screenshot")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");
    },
	function(){
		this.title = this.t;
		$("#screenshot").remove();
    });
	$("a.screenshot").mousemove(function(e){
		$("#screenshot")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});
};


// starting the script on page load
$(document).ready(function(){
	screenshotPreview();
});
