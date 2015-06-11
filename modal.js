$(document).ready(function () {
  $("#dialog").dialog({
	  autoOpen: false
	});
	$("#button").on("click", function() {
	  $("#dialog").dialog("open");
	});
});