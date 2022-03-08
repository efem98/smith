$(document).ready(function() {
	$("h1").mouseenter(function(){
		var div = $("div");
		$("h1").slideUp(2000).slideDown(2000).animate({ opacity:'0.7'}, "slow");
		$("h1").css("color","red");
	});

});
