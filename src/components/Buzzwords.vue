<template>
<div class="section__block section__block--buzz section__block--fullscreen section__block--padded section__block--lightgrey">
	<div class="buzzwords">
		<p class="buzzwords__word buzzwords__word--line-right" data-aos="slide-left-in">
			<span class="buzzword__span">Design</span>
		</p>
		<p class="buzzwords__word" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="800">Entwicklung</p>
		<p class="buzzwords__word buzzwords__word--line-left" data-aos="slide-right-in">
			<span class="buzzword__span">Idee</span>
		</p>
	</div>
</div>
</template>

<script>
export default {
	name: 'buzzwords',
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
.section__block--fullscreen.section__block--buzz {
	display: flex;
	align-items: center;
	max-width: 100vw;
}

.buzzwords {
	margin: 0 auto;
	overflow: hidden;
}

.buzzwords__word {
	font-size: 10vw;
	line-height: 14vw;
	font-family: 'Cardo', Helvetica, serif;
	position: relative;
	display: flex;
	align-items: center;
	color: var(--grey-dark);
	text-transform: uppercase;
}
.buzzword__span {
	font-size: 10vw;
	line-height: 14vw;
	font-family: 'Cardo', Helvetica, serif;
	color: var(--grey-dark);
	text-transform: uppercase;
	opacity: 0;

	transition: transform .6s .8s ease-out, opacity .6s .8s ease-out;
}

.buzzwords__word--line-right .buzzword__span {
	transform: translateX(20px);
}

.buzzwords__word--line-left .buzzword__span {
	transform: translateX(-20px);
}
.buzzwords__word--line-right::after,
.buzzwords__word--line-left::before {
	background: var(--grey-dark);
	height: 3px;
	flex: 1;
	content: '';
}

.buzzwords__word--line-right::after {
	margin-left: 15px;
	transform: translateX(100%);
	transition: transform 1.1s .3s ease-out;
}

.buzzwords__word--line-left::before {
	margin-right: 15px;
	transform: translateX(-100%);
	transition: transform 1s .3s ease-out;
}

.buzzwords__word--line-right[data-aos="slide-left-in"].aos-animate::after {
	transform: translateX(0);
}

.buzzwords__word--line-left[data-aos="slide-right-in"].aos-animate::before {
	transform: translateX(0);
}

.buzzwords__word--line-right[data-aos="slide-left-in"].aos-animate .buzzword__span,
.buzzwords__word--line-left[data-aos="slide-right-in"].aos-animate .buzzword__span {
	opacity: 1;
	transform: translateX(0);
}

/* === RESPONSIVE === */
@media screen and (min-width: 688px) {
	.buzzwords__word--line-right::after,
	.buzzwords__word--line-left::before {
		height: 5px;
	}
}
/* === /RESPONSIVE === */
</style>