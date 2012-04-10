$(document).ready(function() {
	$("#work a").css("color", "#33C");

	var onButton = 1;
	
	var workButton = $("#work a");
	var personalButton = $("#personal a");
	
	var linkList = ["#github", "#stackoverflow", "#linkedin"];
	distributeLinks(linkList);
	


	var subjList = ["#twitter", "#facebook"];
	distributeLinks(subjList);
	
	
	workButton.click(function(e) {
		e.preventDefault();
		
		if(onButton == 0) {
			$("#personal a").css("color", "#505050");
			$("#work a").css("color", "#33C");
			
			$("#personalDiv").animate({height: 'toggle'}, 1000, function() {
				$("#workDiv").animate({height: 'toggle'}, 1000);
			});
			$("#personalFooter").animate({height: 'toggle'}, 1000, function() {
				
				linkList = ["#github", "#stackoverflow", "#linkedin"];
				$("#workFooter").animate({height: 'toggle'}, 1000);
			});
			onButton = 1;
		}
	});
	
		
	personalButton.click( function(e) {
		e.preventDefault();
		
		if(onButton == 1) {
			$("#personal a").css("color", "#33C");
			$("#work a").css("color", "#505050");
			
			$("#workDiv").animate({height: 'toggle'}, 1000, function() {
				$("#personalDiv").animate({height: 'toggle'}, 1000);
			});
			
			$("#workFooter").animate({height: 'toggle'}, 1000, function() {
				linkList = ["#twitter", "#facebook"];
				$("#personalFooter").animate({height: 'toggle'}, 1000);
			});
			onButton = 0;
		}
	});
	
	
	$("header .button a").mouseover(function() {
		$(this).css("text-decoration", "underline");
	}).mouseout(function() {
		$(this).css("text-decoration", "none");
	});
	
	

	function distributeLinks(links) {
		var containerWidth = $("footer").width();	
		
		//alert(avgWidth);
		var changeWidth = (containerWidth - (48 * links.length)) / (links.length + 1);
		
		for(var i = 0; i < links.length; i++) {
			var logo = links[i];
			var leftPlace = changeWidth;
			$(logo).css("margin-left", leftPlace);
			
		}
		
	}
	
	$(window).resize(function() {
		distributeLinks(linkList);

		distributeLinks(subjList);
	});
	

	
	$(".fancyImg").fancybox({
		'titlePosition' : 'over',
		'showCloseButton': true
		
	});
	
});
