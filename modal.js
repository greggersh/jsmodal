$(document).ready(function () {
  $("#dialog").dialog({
	  autoOpen: false,
    modal: true
	});
	$("#button").on("click", function() {
	  $("#dialog").dialog("open");
	});
});