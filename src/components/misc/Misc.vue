<template>
	<!-- @click.native="copyEmailAdress" v-bind:class="{ active: buttonOverlay }" -->
	<div class="circle" ref="testref">

		<svg class="svg svg--circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="pinktogreenish" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
					<stop offset="0" stop-color="rgba(113, 203, 192, 0.8)" />
					<stop offset="1" stop-color="rgba(242, 175, 206, 0.4)" />
				</linearGradient>
				<linearGradient id="grad" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
					<stop offset="0" stop-color="rgba(75, 122, 136, 0.8)" />
					<stop offset="1" stop-color="rgba(85, 85, 85, 0.3)" />
				</linearGradient>
			</defs>
			<circle class="svg__circle" cx="50" cy="50" r="47" fill="url(#pinktogreenish)" />
			<circle class="svg__circle svg__circle--overlay" cx="50" cy="50" r="47" fill="url(#grad)" />
		</svg>

		<svg class="svg svg--stroke" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<circle class="svg__stroke" cx="50" cy="50" r="49" />
		</svg>

		<h1 class="circle__name">
			<span class="circle__name--surname">Julian</span>
			<span class="circle__name--name">Orth</span>
		</h1>

		<svg class="svg-line" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<line class="svg-line__line" x1="80" y1="190" x2="140" y2="20" stroke="#000" />
		</svg>

	</div>

	<!-- <p class="marquee">
	<span>
		JAVASCRIPT - HTML5 - CSS3 - VUE.JS - THREE.JS - PHOTOSHOP - INDESIGN
	</span>
</p> -->

<div class="contact-circle">
	<button class="contact-circle__button js_contact-circle__buton" v-on:click="copyEmailAdress" v-bind:class="{ active: buttonOverlay }">
		<span class="contact-circle__overflowee">
			<span class="contact-circle__text">Say Hello.</span>
			<span class="contact-circle__text--hidden">Email copied.</span>
		</span>
	</button>

	<svg viewBox="0 0 400 400" class="contact-circle--svg">
		<defs>
			<path id="Circle" d="M 250, 200
				 m -200, 0
				 a 100,100 0 1,1 300,0
				 a 100,100 0 1,1 -300,0" />
		</defs>
		<text class="contact-circle--svg-text">
			<textPath xlink:href="#Circle">CONTACT - CONTACT - CONTACT - CONTACT - CONTACT -</textPath>
		</text>
	</svg>
</div>


<div class="section__content section__about-testimonial">

	<div class="testimonial">
		<h2 class="testimonial__heading">
			<span class="testimonial__heading-overlay">
				<svg width="100%" height="160px" viewBox="0 0 1098.72 89.55" class="testimonial__svg">
					<path id="curve" fill="transparent" d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"></path>
					<text width="100%" style="transform:translate3d(0,0,0);">
						<textPath style="transform:translate3d(0,0,0);" alignment-baseline="top" xlink:href="#curve" startOffset="1200px" id="text-path">Webdesign Is Art.</textPath>
					</text>
				</svg>
				<blockquote class="testimonial__heading-text js_testimonial__heading-text" data-aos="custom-slide-from-bottom222" data-aos-delay="500">Webdesign is Art</blockquote>
			</span>
		</h2>
	</div>

</div>



<div class="circle-container">
	<div class="circle">

		<svg id="contactCircle" class="svg svg--circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="pinktogreenish" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
					<stop offset="0" stop-color="rgba(113, 203, 192, 0.8)" />
					<stop offset="1" stop-color="rgba(78, 235, 23, 0.4)" />
				</linearGradient>
				<linearGradient id="grad" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(45)">
					<stop offset="0" stop-color="rgba(75, 122, 136, 0.8)" />
					<stop offset="1" stop-color="rgba(85, 85, 85, 0.3)" />
				</linearGradient>
			</defs>

			<circle class="svg__circle js_svg__circle" cx="50" cy="50" r="47" fill="url(#pinktogreenish)" />
			<circle class="svg__circle svg__circle--overlay" cx="50" cy="50" r="47" fill="url(#grad)" />
		</svg>

		<svg class="svg svg--stroke" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<circle class="svg__stroke" cx="50" cy="50" r="49" />
		</svg>

		<p class="circle__text">
			<span class="circle__label">Say hello</span>
		</p>

	</div>
</div>

<!-- <svg width="100%" height="100%" stroke="var(--grey-medium)" stroke-width="1" class="letter" data-aos="animate-stroke">
	<text class="letter__text" text-rendering="optimizeLegibility" x="4" y="100" fill="none">A</text>
</svg> -->
</template>

<script>
export default {
  name: 'misc',

  methods: {
  },
  created() {
    // runs before DOM is accesible
  },
  mounted() {
			var ref = this.$refs.testref;
  },
  destroyed() {

  }
}
</script>


<style>

/* circle styles */
.circle {
	position: absolute;
	top: 9rem;
	right: 0;
	width: 40vw;
	height: 40vw;
	max-width: 27rem;
	max-height: 27rem;
	min-width: 20rem;
	min-height: 20rem;
	opacity: 1;
}

.svg--circle {
	opacity: 0;
	animation: fade-in 1.5s linear 1 forwards;
	animation-delay: 2.2s;
}

.svg__circle {
	animation: rotate-360 3s linear infinite, pulse-opacity 5s linear infinite;
	transform-origin: 50% 50%;
}

.svg__circle--overlay {
	position: absolute;
	top: 0;
	left: 0;
	animation: rotate-neg-360 3s linear infinite, pulse-opacity 5s linear infinite;
}

.svg--stroke {
	position: absolute;
	top: 0;
	left: 0;
}

.circle__layer {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	backface-visibility: hidden;
}

.circle__name {
	position: absolute;
	right: 14%;
	bottom: 27%;
	text-align: right;
	font-style: italic;
	color: #1c1a1a;
	margin: 0;
}

.circle__name--surname {
	font-weight: 300;
	display: block;
}

.circle__name--name {
	font-weight: 600;
}


.svg__stroke {
	animation: circle-animation 3s ease-out 1 both;
	display: block;
	fill: transparent;
	stroke: #797979;
	stroke-linecap: round;
	stroke-dasharray: 308;
	stroke-dashoffset: 283;
	stroke-width: 1px;
	transform-origin: 50% 50%;
}

.svg-line {
	position: absolute;
	top: -15%;
	left: -15%;
	width: 130%;
	height: 130%;
}

.svg-line__line {
	stroke: #797979;
	animation: grow-from-center 3s ease-out forwards;
}

@keyframes grow-from-center {
	0% {
		stroke-dasharray: 0 140;
		stroke-dashoffset: -70;
	}

	100% {
		stroke-dasharray: 180 140;
		stroke-dashoffset: 0;
	}

}

@keyframes pulse-opacity {
	0% {
		opacity: 0.25;
	}

	50% {
		opacity: 0.85;
	}

	100% {
		opacity: 0.25;
	}
}

@keyframes rotate-360 {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}

@keyframes rotate-neg-360 {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-neg-360 {
	from {
		transform-origin: center top 50%;
		transform: rotate(0deg);
	}

	to {
		transform-origin: center top 50%;
		transform: rotate(-360deg);
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}

	20% {
		opacity: 0.1;
	}

	/* 75% {
		opacity: 0.0;
	} */

	100% {
		opacity: 1;
	}
}

@keyframes circle-animation {

	0% {
		stroke-dashoffset: 308;
		transform: rotate(0);
	}

	100% {
		stroke-dashoffset: 0;
		transform: rotate(180deg);
	}
}

.marquee {
	width: 450px;
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;
	box-sizing: border-box;
}

.marquee span {
	display: inline-block;
	padding-left: 100%;
	animation: marquee 15s linear infinite;
}

.marquee span:hover {
	animation-play-state: paused
}

@keyframes marquee {
	0% {
		transform: translate(0, 0);
	}

	100% {
		transform: translate(-100%, 0);
	}
}



.contact-circle--svg {
	width: 400px;
	height: 400px;
	animation: rotate 15s linear infinite;
	transform-origin: center;
}

.contact-circle--svg:hover {
	/* animation-direction: reverse; */
}

.contact-circle--svg-text {
	/* stroke: #fff; */
	fill: #fff;
	font-size: 2.09rem;
}

.contact-circle__button {
	background: #5c9463;
	border-radius: 50%;
	position: absolute;
	width: 200px;
	height: 200px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	cursor: pointer;
	box-shadow: 0 0 0 transparent;
	/* transition: width .6s linear 0s, height .6s linear 0s; */
	transition: all .3s ease-out;
}

.contact-circle__button::after {
	content: '';
	box-shadow:
		0 0 30px #fff,
		-10px 0 80px #00ff96,
		10px 0 50px #0ff;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	width: 200px;
	height: 200px;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 50%;
}

.contact-circle__button:hover::after {
	opacity: 1;
}

.contact-circle__button-text {
	color: #1c1a1a;
	font-size: 1.2rem;
	text-transform: uppercase;
	/* font-family: 'Quicksand', sans-serif; */
}

.contact-circle__overflowee {
	overflow: hidden;
	height: 18px;
}

.contact-circle__text {
	display: inline-block;
	width: 100%;
}

.contact-circle__text--hidden {
	display: inline-block;
	width: 100%;
}

.contact-circle__button.active::after {
	/* display: none; */
}

.contact-circle__button.active {
	animation: pulseIn 1.5s ease-out forwards;
}

.email-copy {
	position: absolute;
	left: -3000px;
	height: 1px;
	width: 1px;
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes pulseIn {
	0% {
		width: 200px;
		height: 200px;
	}

	50% {
		width: 230px;
		height: 230px;
	}

	100% {
		width: 200px;
		height: 200px;
	}
}

/* circle styles */
.circle-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.circle {
	width: 35vw;
	height: 35vw;
	max-width: 27rem;
	max-height: 27rem;
	min-width: 18rem;
	min-height: 18rem;
	opacity: 1;
}

.svg--circle {
	opacity: 0;
	animation: fade-in 1.5s linear 1 forwards;
	animation-delay: 2.2s;
	z-index: 1;
	position: relative;
	cursor: pointer;
}

.svg__circle {
	animation: rotate-360 3s linear infinite, pulse-opacity 5s linear infinite;
	transform-origin: 50% 50%;
}

.svg__circle--overlay {
	position: absolute;
	top: 0;
	left: 0;
	animation: rotate-neg-360 3s linear infinite, pulse-opacity 5s linear infinite;
}

.svg--stroke {
	position: absolute;
	top: 0;
	left: 0;
}

.circle__layer {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	backface-visibility: hidden;
}

.circle__text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.2rem;
	color: #1c1b1b;
	cursor: pointer;
	letter-spacing: 4px;
	height: 26px;
	overflow: hidden;
	text-align: center;
	/* transition: letter-spacing 2s ease-out; */
	z-index: 3;
	user-select: none;
}

.circle__text:hover {
	/* letter-spacing: 10px; */
}

.circle__label {
	display: inline-block;
	width: 100%;
	transition: transform .5s ease-out;
	height: 26px;
	user-select: none;
}

.circle__label--primary::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 15%;
	right: 0;
	width: 70%;
	height: 2px;
	transform: scaleX(0);
	background-color: #1c1b1b;
	transition: transform 0.3s;
}

.circle__label--primary:hover::after {
	transform: scaleX(1);
}


.svg__stroke {
	animation: circle-animation 3s ease-out 1 both;
	display: block;
	fill: transparent;
	stroke: #797979;
	stroke-linecap: round;
	stroke-dasharray: 308;
	stroke-dashoffset: 283;
	stroke-width: 1px;
	transform-origin: 50% 50%;
	cursor: pointer;
}

.svg-line {
	position: absolute;
	top: -15%;
	left: -15%;
	width: 130%;
	height: 130%;
}

.svg-line__line {
	stroke: #797979;
	animation: grow-from-center 3s ease-out forwards;
}

@keyframes slide-up-and-down {
	0% {
		transform: translateY(4rem);
	}

	30%,
	60% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(4rem);
	}
}

@keyframes grow-from-center {
	0% {
		stroke-dasharray: 0 140;
		stroke-dashoffset: -70;
	}

	100% {
		stroke-dasharray: 180 140;
		stroke-dashoffset: 0;
	}

}

@keyframes pulse-opacity {
	0% {
		opacity: 0.25;
	}

	50% {
		opacity: 0.85;
	}

	100% {
		opacity: 0.25;
	}
}

@keyframes rotate-360 {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}

@keyframes rotate-neg-360 {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-neg-360 {
	from {
		transform-origin: center top 50%;
		transform: rotate(0deg);
	}

	to {
		transform-origin: center top 50%;
		transform: rotate(-360deg);
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}

	20% {
		opacity: 0.1;
	}

	/* 75% {
			opacity: 0.0;
		} */

	100% {
		opacity: 1;
	}
}

@keyframes circle-animation {

	0% {
		stroke-dashoffset: 308;
		transform: rotate(0);
	}

	100% {
		stroke-dashoffset: 0;
		transform: rotate(180deg);
	}
}
</style>