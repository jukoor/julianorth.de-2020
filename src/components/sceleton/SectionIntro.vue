<template>
<div class="section__block section__block--padded section__block--center section__block--fullscreen section__block--hero section__heading section__block--darkgrey">
	<div class="section__inner">
		<div class="block-reveal" :class="['block-reveal', 'block-reveal--gradient' + number]">
			<div class="block-reveal__background"></div>
		</div>

		<div class="section__header header">
			<h2 class="header__heading" :class="['header__heading', 'header__heading--gradient' + number]">{{ title }}</h2>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'SectionHeader',
	props: {
		title: String,
		number: String
	},
	mounted() {

	},
	methods: {

	},
	computed: {

	}
}
</script>

<style scoped>
.section__inner {
	position: relative;
	width: 100%;
	height: 100%;
}

.block-reveal {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 0;
	padding: 1px;
	overflow: hidden;
	opacity: 0;
	animation: toggle-height 3s .5s cubic-bezier(.29, 1.04, .72, .97) forwards;
}

.block-reveal__background {
	display: block;
	width: 100%;
	height: 100%;
	background: var(--grey-dark);
}

/* about */
.block-reveal--gradient01 {
	background: linear-gradient(-120deg, #68d3ba, #45c2bd, #0081df);
}

/* projects */
.block-reveal--gradient02 {
	background: linear-gradient(120deg, #94c490, #82d1c9, #2a88e8);
}

/* contact */
.block-reveal--gradient03 {
	background: linear-gradient(120deg, #cee3c1, #e1cfee, #999beb);
}

/* imprint */
.block-reveal--gradient04 {
	background: linear-gradient(120deg, #c1e3cc, #94bde1, #528eed);
}

.section__header {
	position: absolute;
	right: 10%;
	bottom: 5%;
	overflow: hidden;
}

.header__heading {
	font-size: 15vw;
	line-height: 19vw;
	position: relative;
	display: inline-block;
	overflow: hidden;
	font-weight: 800;
	opacity: 0;
	transform: translateY(100%);
	animation: slide-from-bot 2.0s .8s cubic-bezier(.29, 1.04, .72, .97) forwards;
}

/* about */
.header__heading--gradient01 {
	background: -webkit-linear-gradient(120deg, #68d3ba, #45c2bd, #0081df);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* projects */
.header__heading--gradient02 {
	background: -webkit-linear-gradient(120deg, #94c490, #82d1c9, #2a88e8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	line-height: 19vw;
}

/* contact */
.header__heading--gradient03 {
	background: -webkit-linear-gradient(120deg, #cee3c1, #e1cfee, #999beb);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* imprint */
.header__heading--gradient04 {
	background: -webkit-linear-gradient(120deg, #c1e3cc, #94bde1, #528eed);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.heading__letter {
	opacity: 0;
	transform: rotateY(90deg);
	position: relative;
	display: inline-block;
}

/* === KEYFRAMES === */
@keyframes slide-from-bot {
	0% {
		opacity: 0;
		transform: translateY(100%);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}


@keyframes toggle-height {
	10% {
		opacity: 1;
	}

	100% {
		opacity: 1;
		height: 100%;
	}
}

/* === /KEYFRAMES === */
/* === RESPONSIVE === */
@media screen and (min-width: 1440px) {
	.header__heading {
		font-size: 14rem;
		line-height: 18rem;
	}
}

/* === /RESPONSIVE === */
</style>
