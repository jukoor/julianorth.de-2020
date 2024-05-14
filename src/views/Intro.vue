<template>
<section class="section section--intro">
	<div class="section__block section__block--fullscreen section__block--darkgrey section__block--intro">

		<figure class="photo">

			<div class="photo__container">
				<div class="photo__overlay overlay">
				</div>
				<picture>

					<source type="image/webp" srcset="
						~@/assets/images/webp/julian_orth_4x.webp 2400w,
						~@/assets/images/webp/julian_orth_3x.webp 1900w,
						~@/assets/images/webp/julian_orth_2x.webp 1200w,
						~@/assets/images/webp/julian_orth_1x.webp 502w"
						sizes="100vw" />

						<source type="image/jpg" srcset="
							~@/assets/images/julian_orth_4x.jpg 2400w,
							~@/assets/images/julian_orth_3x.jpg 1900w,
							~@/assets/images/julian_orth_2x.jpg 1200w,
							~@/assets/images/julian_orth_1x.jpg 502w"
							sizes="100vw" />

					<img class="photo__img" title="Julian Orth Photo" alt="Julian Orth Photo" src="~@/assets/images/julian_orth_2x.jpg" />
				</picture>
			</div>
			<figcaption class="photo__caption">Foto von Julian Orth auf der Couch sitzend und am Laptop arbeitend.</figcaption>

			<div class="section__block--padded section__block--teaser">
				<div class="teaser">
					<h2 class="teaser__heading">
						<span class="teaser__word teaser__word--frontend">
							<span class="teaser__letter">F</span>
							<span class="teaser__letter">r</span>
							<span class="teaser__letter">o</span>
							<span class="teaser__letter">n</span>
							<span class="teaser__letter">t</span>
							<span class="teaser__letter">e</span>
							<span class="teaser__letter">n</span>
							<span class="teaser__letter">d</span>
						</span>
						<br class="teaser__mobile-br">
						<span class="teaser__word teaser__word--developer">
							<span class="teaser__letter">E</span>
							<span class="teaser__letter">n</span>
							<span class="teaser__letter">t</span>
							<span class="teaser__letter">w</span>
							<span class="teaser__letter">i</span>
							<span class="teaser__letter">c</span>
							<span class="teaser__letter">k</span>
							<span class="teaser__letter">l</span>
							<span class="teaser__letter">e</span>
							<span class="teaser__letter">r</span>
						</span>
						<br class="teaser__mobile-br--s">
						<span class="teaser__line"></span>
						<br class="teaser__mobile-br">
						<span class="teaser__word teaser__word--based">
							<span class="teaser__letter">a</span>
							<span class="teaser__letter">u</span>
							<span class="teaser__letter">s</span>
						</span>
						<br class="teaser__mobile-br">
						<span class="teaser__word teaser__word--berlin">
							<span class="teaser__letter">B</span>
							<span class="teaser__letter">e</span>
							<span class="teaser__letter">r</span>
							<span class="teaser__letter">l</span>
							<span class="teaser__letter">i</span>
							<span class="teaser__letter">n</span>
							<span class="teaser__letter">.</span>
						</span>
					</h2>
					<button type="button" class="cta" @click="openMenu">
						<span class="cta__text">entdecken</span>
						<span class="cta__arrow cta__arrow--first"></span>
						<span class="cta__arrow cta__arrow--second"></span>
					</button>
				</div>
			</div>
		</figure>


		<Footerbar />
	</div>

</section>
</template>

<script>
import Footerbar from '@/components/sceleton/Footerbar'
import {
	EventBus
} from '@/assets/js/eventbus.js';

export default {
	name: 'intro',
	components: {
		Footerbar
	},
	props: {},
	methods: {
		openMenu() {
			EventBus.$emit('menu-cta-clicked', "string");
		}
	},
	mounted() {

		window.setTimeout(function() {
			document.body.classList.add("stage_img_loaded");
		}, 500)

	}
}
</script>

<style scoped>
[data-aos][data-aos][data-aos-delay="4800"].aos-animate {
	transition-delay: 4.8s;
}

.section__block--intro {
	height: 100vh;
}

.section__block--intro .footer {
	position: absolute;
	bottom: 0;
}

.section__block--fullscreen.section__block--intro {
	max-width: none;
}

.section--intro .section__content {
	height: 100%;
}

.section__block--padded.section__block--teaser {
	position: absolute;
	top: 12%;
	width: 100%;
	height: auto;
	padding-top: 0;
	padding-bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
}

.teaser {
	position: relative;
	z-index: 1;
}

.teaser__mobile-br {
	display: inline;
}

.photo {
	position: relative;
	height: 100%;
}

.photo__container {
	overflow: hidden;
	position: relative;
	height: 100%;
}

.photo__img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0;

}

body.stage_img_loaded .photo__img {
	animation: zoom-out 1.5s .2s 1 linear forwards;
}

.photo__caption {
	display: none;
}

.overlay {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.30), transparent);
}

.teaser__heading {
	overflow: hidden;
	display: block;
	position: relative;
}

.teaser__overlay {
	margin-bottom: 5px;
	display: block;
	position: relative;
	overflow: hidden;
}

.teaser__letter {
	display: inline-block;
	font-size: 2.1rem;
	line-height: 2.3rem;
	color: #fff;
	font-weight: 600;
	opacity: 0;
	transform: rotateY(90deg);
	position: relative;
}

.teaser__letter:hover {
	transform: rotateY(90deg);
}

body.stage_img_loaded .teaser__letter {
	animation: rotate-text-in .8s 1.7s 1 ease-out forwards;
}

.teaser__word {
	margin-right: 15px;
	display: inline-block;
	margin-bottom: 0.5rem;
	margin-left: -3px;
}

body.stage_img_loaded .teaser__word--based .teaser__letter {
	animation-delay: 3.9s;
}

body.stage_img_loaded .teaser__word--berlin .teaser__letter {
	animation-delay: 3.9s;
}

.teaser__line {
	display: inline-block;
	position: relative;
	height: 5px;
	width: 6rem;
	top: -9px;
	transform: translateX(-100%);
	background: #fff;
	margin-right: 1.5rem;
}

body.stage_img_loaded .teaser__line {
	animation: grow-right 1.5s 2.5s 1 ease-out forwards;
}

.cta {
	cursor: pointer;
	position: relative;
	color: #fff;
	padding: 10px 20px 6px 0px;
	z-index: 1;
	font-size: 20px;
	margin-top: 180px;
	border-bottom: 3px solid #fff;
	left: 0;
	opacity: 0;

}

body.stage_img_loaded .cta {
	animation: fade-cta-in .8s 4.8s 1 ease-out forwards;
}

.cta__text {
	display: inline-block;
	margin-right: 35px;
	letter-spacing: 1px;
	transition: padding-left .3s ease-out, margin-right .3s ease-out;
	min-width: 90px;
	text-align: left;
}

.cta:hover .cta__text {
	padding-left: 8px;
	margin-right: 45px;
}

.cta__arrow {
	display: inline-block;
	opacity: 0;
	position: relative;
}

.cta__arrow:before,
.cta__arrow:after {
	background: #fff;
	content: '';
	display: block;
	height: 2px;
	position: absolute;
	top: 0;
	left: 0;
	width: 10px;
}

.cta__arrow:before {
	transform: rotate(45deg) translateX(-13%);
	transform-origin: top left;
}

.cta__arrow:after {
	transform: rotate(-45deg) translateX(11%);
	transform-origin: top right;
}

.cta__arrow--first {
	animation: arrow-slide 2s ease-in-out infinite;
}

.cta__arrow--second {
	animation: arrow-slide 2s 1s ease-in-out infinite;
}

.intro__heading-letter--two::before {
	content: '';
	background: #fff;
	height: 7px;
	width: 17vw;
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}

.section__block--intro .footer__text {
	flex: 1 100%;
}

/* === KEYFRAMES === */
@keyframes arrow-slide {
	0% {
		opacity: 0;
		transform: translateX(-7px) rotate(-90deg);
	}

	70% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: translateY(0) rotate(-90deg);
	}
}

@keyframes fade-cta-in {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes grow-right {
	0% {
		transform: translateX(-100%);
	}

	100% {
		transform: translateX(0);
	}
}

@keyframes rotate-text-in {
	0 {
		opacity: 0;
		transform: rotateY(90deg);
	}

	100% {
		opacity: 1;
		transform: rotateY(0);
	}
}

@keyframes show-text {
	0% {
		opacity: 0;
	}

	49% {
		opacity: 0;
	}

	50%,
	100% {
		opacity: 1;
	}

}

@keyframes block-reveal-right {
	0% {
		transform: translate(-110%, 0);
	}

	45%,
	55% {
		transform: translate(0, 0);
	}

	100% {
		transform: translate(110%, 0);
	}
}

@keyframes slide-from-left {
	from {
		opacity: 0;
		transform: translateX(105%);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes reveal-right {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(100%);
	}
}

@keyframes zoom-out {
	0% {
		transform: scale(1.1);
		opacity: 0;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}

/* === KEYFRAMES === */


/* === RESPONSIVE === */
@media screen and (min-width: 321px) {
	.teaser__letter {
		font-size: 2.7rem;
		line-height: 2.5rem;
	}
}

@media screen and (min-width: 560px) {
	.section__block--padded.section__block--teaser {
		top: 15%;
	}
}

@media screen and (min-width: 688px) {
	.teaser__word {
		margin-left: 0;
	}

	.teaser__word--frontend {
		margin-left: -3px;
	}

	.teaser__mobile-br {
		display: none;
		height: 0;
	}

	.teaser__word {
		margin-bottom: 1rem;
	}

	.cta {
		bottom: 10%;
	}

	.section__block--intro .footer .footer__text--joke,
	.section__block--intro .footer .footer__text--copyright {
		display: inline-block;
	}

	.section__block--intro .footer__text {
		flex: 0 0 auto;
	}

	.teaser__overlay {
		display: inline-block;
	}

	.teaser__overlay--mr-lg {
		margin-right: 11px;
	}

	.teaser__overlay--line {
		padding-left: 13rem;
	}

	.teaser__line {
		display: inline-block;
	}

	.cta {
		margin-top: 30px;
	}
}

@media screen and (min-width: 992px) {
	.teaser__letter {
		font-size: 4rem;
		line-height: 4rem;
	}

	.teaser__line {
		width: 12rem;
	}

	.cta {
		font-size: 26px;
	}

	.cta__text {
		margin-right: 30px;
		min-width: 110px;
	}

	.teaser__word--frontend {
		margin-left: -5px;
	}
}

/* === /RESPONSIVE === */
</style>
