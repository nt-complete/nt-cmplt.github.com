$(document).ready(function() {
	$("#work a").css("color", "#33C");

	var onButton = 1;
	
	var workButton = $("#work");
	var personalButton = $("#personal");
	
	distributeLinks();
	
	workButton.click(function(e) {
		e.preventDefault();
		
		if(onButton == 0) {
			$("#personal a").css("color", "#505050");
			$("#work a").css("color", "#33C");
			
			$("#personalDiv").animate({height: 'toggle'}, 1000, function() {
				$("#workDiv").animate({height: 'toggle'}, 1000);
			});
			onButton = 1;
		}
	});
	
	$("#header .button").mouseover(function() {
		$(this).css("text-decoration", "underline");
	}).mouseout(function() {
		$(this).css("text-decoration", "none");
	});
	
	
	
	personalButton.click( function(e) {
		e.preventDefault();
		
		if(onButton == 1) {
			$("#personal a").css("color", "#33C");
			$("#work a").css("color", "#505050");
			
			$("#workDiv").animate({height: 'toggle'}, 1000, function() {
				$("#personalDiv").animate({height: 'toggle'}, 1000);
			});
			onButton = 0;
		}
	});
	
	function distributeLinks() {
		var containerWidth = $("#footer ul").width();
		var linkList = ["#github", "#stackoverflow", "#linkedin"];
		
		var changeWidth = (containerWidth - (48 * linkList.length)) / (linkList.length + 1);
		for(var i = 0; i < linkList.length; i++) {
			var logo = linkList[i];
			var leftPlace = changeWidth;
			$(logo).css("margin-left", leftPlace);
			
		}
		
	}
	
	$(window).resize(function() {
		distributeLinks();
	});
});
