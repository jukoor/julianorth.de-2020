<template>
<div class="section__block section__block--lightgrey section__block--lookingfor">
	<h2 class="paragraph__heading paragraph__heading--big paragraph__heading--line heading" data-aos="slide-in">
		<span class="word-container word-container--line">
			<span class="word-container__word">Hello</span>
		</span>
		<span class="word-container word-container--afterline">
			<span class="word-container__word">is</span>
		</span>
		<span class="word-container">
			<span class="word-container__word">it</span>
		</span>
		<span class="word-container">
			<span class="word-container__word">me</span>
		</span>
		<span class="word-container">
			<span class="word-container__word">you're</span>
		</span>
		<span class="word-container">
			<span class="word-container__word">looking</span>
		</span>
		<span class="word-container">
			<span class="word-container__word">for</span>
		</span>
		<span class="word-container">
			<span class="word-container__word">?</span>
		</span>
	</h2>
</div>
</template>

<script>
export default {
	name: 'textteaserslide',
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

.word-container {
	position: relative;
	overflow: hidden;
	display: block;
	margin-right: 0;
	font-size: 1.5rem;
	line-height: 2rem;
	flex: 1 100%;
	padding: 0 10px;
	text-align: center;
}

.word-container--line {
	padding-bottom: 80px;
	font-size: 3rem;
	line-height: 1;
}

.word-container--line::after {
	content: '';
	height: 0;
	width: 2px;
	position: absolute;
	background: var(--grey-dark);
	left: 50%;
	top: 3.5rem;
	transition: height 1s ease;
	transition-delay: 1.2s;
	transform: translateX(-50%);
}

.word-container:last-child {
	margin-right: 0;
}

.word-container__word {
	color: var(--grey-dark);
	display: inline-block;
	opacity: 0;
	transform: translateY(105%);
	font-weight: 200;
}

.word-container--line .word-container__word {
	font-weight: 800;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container .word-container__word {
	animation: slide-from-bottom .8s .5s 1 cubic-bezier(.160, .84, .44, 1) forwards;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container--line::after {
	height: 40px;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(2) .word-container__word {
	animation-delay: 2.3s;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(3) .word-container__word {
	animation-delay: 2.55s;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(4) .word-container__word {
	animation-delay: 2.8s;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(5) .word-container__word {
	animation-delay: 3.05s;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(6) .word-container__word {
	animation-delay: 3.3s;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(7) .word-container__word {
	animation-delay: 3.55s;
}

.paragraph__heading[data-aos="slide-in"].aos-animate .word-container:nth-child(8) .word-container__word {
	animation-delay: 3.8s;
}

/* === KEYFRAMES === */
@keyframes slide-from-bottom {
	from {
		opacity: 0;
		transform: translateY(105%);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* === /KEYFRAMES === */
/* === RESPONSIVE === */
@media (min-width: 992px) {

	.paragraph__heading--big {
		text-align: center;
	}
	.word-container {
		display: inline-block;
		margin-right: 8px;
		padding: 0;
		flex: 0 0 auto;
		text-align: left;
		font-size: 2.7rem;
		line-height: 3.5rem;
	}

	.paragraph__heading[data-aos="slide-in"].aos-animate .word-container--line::after {
		width: 40px;
		height: 2px;
		transform: translateX(8rem);
	}

	.word-container--line {
		padding-right: 67px;
		font-size: 2.7rem;
		line-height: 3rem;
		padding-bottom: 0;
	}

	.word-container--line::after {
		content: '';
		height: 2px;
		width: 0;
		position: absolute;
		background: var(--grey-dark);
		left: 0;
		top: 50%;
		transition: width 1s ease;
		transition-delay: 1.2s;
		transform: translateX(4.5rem);
	}
}

/* === /RESPONSIVE === */
</style>