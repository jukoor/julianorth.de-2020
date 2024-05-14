<template>
<section class="section section--contact">

	<div class="section__content">

		<SectionIntro title="kontakt." number="03" />


		<div class="section__block section__block--fullscreen section__block--padded section__heading section__block--darkgrey section__block--mail">

			<div class="textblock">
				<h2 class="textblock__heading" data-aos="grow-fade-in">Sag<br>Hallo</h2>
				<p class="textblock__paragraph textblock__paragraph--contact" data-aos="custom-fade-left" data-aos-delay="500">
					Ich freu mich auf deine Ideen oder dein Feedback.<br>
					Du findest mich auch auf <a href="https://www.linkedin.com/in/julian-orth/">LinkedIn</a>.
				</p>
				<!-- <button @click="copyEmail" v-on:click="mailcopy = true" class="link link--mail js_link--mail" data-aos="custom-fade-left">hello (at) julianorth.de</button> -->
				<button type="button" class="cta" data-aos="custom-fade-left" @click="copyEmail" v-on:click="mailcopy = true">
					<span class="cta__text">Mail kopieren</span>
					<span class="cta__arrow cta__arrow--first"></span>
					<span class="cta__arrow cta__arrow--second"></span>
				</button>
				<span class="confirm" v-bind:class="{ 'show': mailcopy }">Email kopiert. Danke!</span>
			</div>

			<SVGMap />

			<canvas id="confettiCanvas" class="confetti-canvas"></canvas>
			<textarea class="js_email-copy email-copy" readonly></textarea>


		</div>

	</div>

	<Footerbar />

</section>
</template>

<script>
import confetti from 'canvas-confetti'
import SectionIntro from '@/components/sceleton/SectionIntro.vue';
import SVGMap from '@/components/SVGMap.vue';
import Footerbar from '@/components/sceleton/Footerbar'

export default {
	name: 'Kontakt',
	props: {},
	components: {
		SectionIntro,
		SVGMap,
		Footerbar
	},
	data: function() {
		return {
			buttonOverlay: false,
			mailcopy: false,
			clickAvailable: true
		}
	},
	methods: {
		copyEmail() {
			var that = this;
			// Block multiple clicks on link (1500ms delay)
			if (this.clickAvailable === false) {
				return;
			} else {
				this.copyEmailAdress();
				this.fireConfetti();
			}
			this.clickAvailable = false;
			setTimeout(function() {
				that.clickAvailable = true;
			}, 1500);
		},

		copyEmailAdress() {

			var mailpre = 'hallo';
			var mailat = '@';
			var maildomain = 'julianorth';
			var mailcountry = '.de';

			var hiddenEmailAddress = document.querySelector('.js_email-copy');

			// encode string
			var mailpre64 = window.btoa(encodeURIComponent(mailpre));
			var mailat64 = window.btoa(encodeURIComponent(mailat));
			var maildomain64 = window.btoa(encodeURIComponent(maildomain));
			var mailcountry64 = window.btoa(encodeURIComponent(mailcountry));

			var final = decodeURIComponent(window.atob(mailpre64)) + '' + decodeURIComponent(window.atob(mailat64)) + decodeURIComponent(window.atob(maildomain64)) + decodeURIComponent(window.atob(mailcountry64));

			hiddenEmailAddress.value = final;
			hiddenEmailAddress.select();
			document.execCommand('copy');
		},

		fireConfetti() {
			var that = this;
			var count = 200;
			var defaults = {
				origin: {
					y: 0.7
				}
			};

			function fire(particleRatio, opts) {

				that.confetti(Object.assign({}, defaults, opts, {
					particleCount: Math.floor(count * particleRatio),
					colors: ['#327d9a', '#144152', '#4d9cb9']
				}));
			}

			fire(0.25, {
				spread: 26,
				startVelocity: 55,
			});
			fire(0.2, {
				spread: 60,
			});
			fire(0.35, {
				spread: 100,
				decay: 0.91,
			});
			fire(0.1, {
				spread: 120,
				startVelocity: 25,
				decay: 0.92,
			});
			fire(0.1, {
				spread: 120,
				startVelocity: 45,
			});
		}
	},
	created() {
		var myCanvas = document.getElementById('confettiCanvas');

		this.confetti = confetti.create(myCanvas, {
			resize: true,
			useWorker: true
		});

	},
	mounted() {

	},
	destroyed() {}
}
</script>


<style scoped>
.section__block--mail {
	display: flex;
}

.section__block--mail .textblock {
	min-width: 80%;
	flex-basis: 80%;
	z-index: 2;
}

.paragraph__heading {
	position: relative;
	font-size: 3rem;
}

.link {
	position: relative;
	text-align: left;
	cursor: pointer;
	text-decoration: underline;
	outline: 0;
	margin-top: 2.5rem;
}

.cta {
	align-self: flex-start;
	position: relative;
	left: 0;
	z-index: 1;
	padding: 10px 20px 6px 0px;
	margin-top: 30px;
	font-size: 17px;
	color: #fff;
	white-space: nowrap;
	cursor: pointer;
	border-bottom: 3px solid #fff;
	opacity: 0;
}

.cta__text {
	display: inline-block;
	margin-right: 20px;
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

.confirm {
	display: inline-block;
	margin-top: 10px;
	font-size: 13px;
	color: var(--blue);
	transition: opacity 1s .3s ease-out;
	opacity: 0;
}

.confirm.show {
	opacity: 1;
}

.textblock__paragraph--contact {
	max-width: 22rem;
}

.paragraph__heading::before {
	content: '';
	height: 3px;
	width: 60px;
	border-radius: 2px;
	background-color: #ffffff;
	position: absolute;
	top: 27px;
	right: calc(100% + 28px);
}

.paragraph__text {
	font-size: 1.4rem;
	color: #9c9c9c;
}

.email-copy {
	opacity: 0;
	pointer-events: none;
	width: 1px;
	height: 1px;
	position: absolute;
	left: -9999px;
}

.confetti-canvas {
	width: 1px;
	height: 1px;
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

/* === /KEYFRAMES === */
/* === RESPONSIVE === */
@media screen and (min-width: 560px) {
	.link--mail {
		font-size: 1.8rem;
		line-height: 3.3rem;
	}

	.section__block--mail .textblock {
		min-width: 70%;
		flex-basis: 70%;
	}

	.cta {
		font-size: 19px;
	}

	.cta__text {
		margin-right: 28px;
	}
}

@media screen and (min-width: 992px) {
	.cta {
		font-size: 20px;
	}

	.cta__text {
		margin-right: 35px;
	}

	.link {
		margin-top: 3rem;
	}

	.section__block--mail .textblock {
		z-index: 0;
	}
}

/* === /RESPONSIVE === */
</style>
