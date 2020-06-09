TweenMax.to(".title-1", 2, {
	x: 30,
	opacity: 1,
	ease: Expo.easeInOut,
});

TweenMax.to(".title-2", 2, {
	delay: 0.2,
	x: -80,
	opacity: 1,
	ease: Expo.easeInOut,
});

TweenMax.to(".title-1-small", 2, {
	delay: 1.5,
	opacity: 1,
	ease: Expo.easeInOut,
});

TweenMax.to(".title-1-medium", 3, {
	x: 110,
	opacity: 1,
	ease: Expo.easeInOut,
});

TweenMax.to(".title-2-medium", 3, {
	delay: 0.3,
	x: 110,
	opacity: 1,
	ease: Expo.easeInOut,
});
TweenMax.to(".title-3-medium", 3, {
	delay: 0.6,
	x: 110,
	opacity: 1,
	ease: Expo.easeInOut,
});

TweenMax.to(".title-4-medium", 3, {
	delay: 0.9,
	x: 110,
	opacity: 1,
	ease: Expo.easeInOut,
});

TweenMax.to(".squash-ball", 0, {
	delay: 0,
	scaleX: 0.8,
	scaleY: 0.8,
	ease: Expo.easeInOut,
});

TweenMax.to(".squash-ball", 1, {
	delay: 0,
	scaleX: 0.95,
	scaleY: 0.95,
	ease: Expo.easeInOut,
});

TweenMax.to(".squash-ball", 1, {
	delay: 1,
	scaleX: 0,
	scaleY: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".menu-btn-container", 2, {
	delay: 0.5,
	x: 80,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".medium-img", 2, {
	delay: 1.5,
	y: -20,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".small-img", 2, {
	delay: 1.5,
	y: 0,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".pattern", 2, {
	delay: 1,
	width: 0,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
	".media-fixed ul li",
	2,
	{
		delay: 0.5,
		y: 20,
		opacity: 0,
		ease: Expo.easeInOut,
	},
	0.1
);

TweenMax.from(".content p", 2, {
	delay: 1.25,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".content #scroll-animation", 2, {
	delay: 1.5,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});

var t1 = new TimelineMax({ paused: true });

t1.to(".menu", 0.25, {
	autoAlpha: 0.98,
});

t1.staggerFrom(
	".main-menu li a:not(.submenu li a)",
	0.05,
	{
		opacity: 0,
		y: 10,
		ease: Power3.easeInOut,
	},
	0.05
);

t1.to(".menu-img", 0.25, {
	opacity: 1,
});

t1.staggerFrom(".media ul li", 0.1, {
	delay: 0.01,
	opacity: 0,
	y: 10,
	ease: Power3.easeInOut,
});

t1.from(".call", 0.1, {
	delay: 0.1,
	opacity: 0,
	y: 10,
	ease: Power3.easeInOut,
});

t1.from(".mail", 0.1, {
	opacity: 0,
	y: 10,
	ease: Power3.easeInOut,
});

t1.reverse();

$(document).on("click", ".menu-btn", function () {
	t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-menu", function () {
	t1.reversed(!t1.reversed());
});

// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	// IE Fallback
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	elementsToShow.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});

	scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	);
}

$(".wall").jaliswall({
	item: ".wall-item",
	columnClass: ".wall-column",
});
