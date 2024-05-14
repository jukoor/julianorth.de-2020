<template>
<main id="app">
	<Navigation />
	<router-view />
</main>
</template>
<script>
import Navigation from '@/components/sceleton/Navigation';

export default {
	name: 'app',
	components: {
		Navigation
	},
	mounted() {
		// check for mobile device - if true set elements with 100vh height to pixel-value

		function isMobile() {
			//console.log(('ontouchstart' in document.documentElement));
			return ('ontouchstart' in document.documentElement);
		}

		// function throttle(callback, limit) {
		// 	if(!isMobile()) {
		// 		return;
		// 	}
		// 	var wait = false;
		// 	return function() {
		// 		if (!wait) {
		// 			callback.apply(null, arguments);
		// 			wait = true;
		// 			setTimeout(function() {
		// 				wait = false;
		// 			}, limit);
		// 		}
		// 	}
		// }

		function adjustHeight() {
			if (isMobile()) {

				var fullHeightElements = document.getElementsByClassName('section__block--fullscreen');

				for (var i = 0; i < fullHeightElements.length; i++) {
					fullHeightElements[i].style.height = window.innerHeight + "px";
				}

			}
		}
		// window.addEventListener("orientationchange", adjustHeight);
		// window.addEventListener("resize", throttle(adjustHeight, 250));

		// adjustHeight();
	}
}
</script>
