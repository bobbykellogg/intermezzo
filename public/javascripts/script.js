/* Author: CMND-O	*/
var $hero	= $("#hero");
var $cookieOpts	= {expires: 7, path: '/'};
var $mobileName = "intermezzo-mobile";

$(function() {
	isMobile();
	links();
	
	// toggle press articles
	$("#articles article div").hide();
	$("#articles article h2").click(function() {
		$(this)
			.toggleClass("open")
			.next("div").slideToggle();
	});
});

$(window).load(function() {
	if ($("#hero .slideshow").length) {
		cycleSlideshow();
	}
})

function links() {
	// open external links in new window
	var externalLink = $("a[rel='external']");
	externalLink.each(function() {
		$(this).click(function(e) {
			e.preventDefault();
			window.open(this.href);
		});
	});
	
	var emailLink = $("a[rel='email']");
	emailLink.each(function(e) {
		$(this).click(function() {
			var to = $(this).data("to");
			var dom = $(this).data("domain");
			this.href = "mailto:"+to+"@"+dom;
		});
	});
}

function cycleSlideshow() {
	$("#hero .slideshow").cycle({
		delay: 1500,
		timeout: 2500
	});
}

function isMobile() {
	if ((screen.width <= 699) && ($.cookie($mobileName) == null)) {
		document.location = "/mobile";
	}
}

