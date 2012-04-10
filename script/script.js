$(document).ready(function() {
	$("#work a").css("color", "#33C");

	var onButton = 1;
	
	var workButton = $("#work");
	var personalButton = $("#personal");
	
	var linkList = ["#github", "#stackoverflow", "#linkedin"];
	distributeLinks(linkList, "footer");
	
	linkList = ["#work", "#personal"];
	//distributeLinks(linkList, "header");

	var subjList = ["#twitter", "#facebook"];
	distributeLinks(subjList, "footer");
	
	
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
	
	
	$("header .button").mouseover(function() {
		$(this).css("text-decoration", "underline");
	}).mouseout(function() {
		$(this).css("text-decoration", "none");
	});
	
	

	function distributeLinks(links, area) {
		var containerWidth = $(area).width();	
		var avgWidth = 0;
		if(area == "header") avgWidth = 81;
		else avgWidth = 48;
		//alert(avgWidth);
		var changeWidth = (containerWidth - (avgWidth * links.length)) / (links.length + 1);
		
		for(var i = 0; i < links.length; i++) {
			var logo = links[i];
			var leftPlace = changeWidth;
			$(logo).css("margin-left", leftPlace);
			
		}
		
	}
	
	$(window).resize(function() {
		linkList = ["#github", "#stackoverflow", "#linkedin"];
		distributeLinks(linkList, "footer");
		
		linkList = ["#work", "#personal"];
		//distributeLinks(linkList, "header");
		distributeLinks(subjList, "footer");
	});
	

	
	$(".fancyImg").fancybox({
		'titlePosition' : 'over',
		'showCloseButton': true
		
	});
});
