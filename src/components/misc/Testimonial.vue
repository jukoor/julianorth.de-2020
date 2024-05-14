<template>
<section class="section section--testimonial">

	<!-- Testimonial -->

	<div class="section__block section__block--fullscreen section__block--lightgrey">

		<div class="testimonial">
			<svg width="100%" height="100%" stroke="var(--grey-medium)" stroke-width="1" class="testimonial__svg">
				<g>
					<text class="testimonial__text" text-rendering="optimizeLegibility" x="4" y="100" fill="none">
						<tspan x="0">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
						<tspan x="0" dy="10vw">Webdesign is Art</tspan>
					</text>
				</g>
			</svg>

			<!-- <p class="testimonial__paragraph">Webdesign is Art</p> -->
		</div>

	</div>

	<!-- Testimonial -->

</section>
</template>

<script>
export default {
	name: 'testimonial',
	methods: {},
	created() {

	},
	mounted() {

	},
	destroyed() {

	}
}
</script>


<style>
.testimonial {
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 100%;
	padding: 5vw 5vw;
	left: 50%;
	transform: translateX(-50%);
}

.testimonial__text {
	font-size: 9vw;
	font-family: 'Cardo';
	animation: slide-left-infinite 5s linear 1;
	transform: translateY(0);
	line-height: 14vw;
	text-transform: uppercase;
	white-space: nowrap;
}

tspan:hover{
stroke: none;
fill: black;
}

@keyframes slide-left-infinite {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-25%);
	}
}
</style>
