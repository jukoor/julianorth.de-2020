<template>
<nav class="nav" data-aos="fade-in" data-aos-delay="4800">
	<div class="nav__desktop">
		<div class="name">
			<h2 class="name__heading">
				<router-link :to="`/`" v-on:click.native="hideNav" class="name__link">
					<span class="name__span">j</span>
					<span class="name__span">u</span>
					<span class="name__span">l</span>
					<span class="name__span">i</span>
					<span class="name__span">a</span>
					<span class="name__span">n</span>
					<span class="name__span">&nbsp;</span>
					<span class="name__span">o</span>
					<span class="name__span">r</span>
					<span class="name__span">t</span>
					<span class="name__span">h</span>
					<span class="name__span">.</span>
				</router-link>
			</h2>
		</div>
		<button type="button" class="menu-trigger js_menu-trigger" @click="toggleBodyScroll" v-on:click="navOverlayActive = !navOverlayActive" v-bind:class="{ 'menu-trigger--active': navOverlayActive }">
			<span class="menu-trigger__line js_menu-trigger__line"></span>
			<span class="menu-trigger__letter">m</span>
			<span class="menu-trigger__letter">e</span>
			<span class="menu-trigger__letter">n</span>
			<span class="menu-trigger__letter">ü</span>
		</button>
	</div>
	<div class="nav__overlay menu js_nav__overlay" v-bind:class="{ 'nav__overlay--active': navOverlayActive }">
		<div class="menu__slide-block"></div>
		<div class="overlay__content section__block--padded">

			<transition-group class="menu__list" tag="ol" name="slide-fade-bottom">
				<li class="menu__item" v-for="routes in links" v-bind:key="routes.id" v-show="navOverlayActive">
					<router-link :to="`${routes.page}`" v-on:click.native="hideNav" v-bind:key="routes.id" class="menu__link">{{routes.text}}</router-link>
				</li>
			</transition-group>

		</div>
	</div>

	<div class="lightmode js_lightmode" style="display:none">
		<button class="lightmode__toggler" v-on:click="toggleLightMode" v-bind:class="{ active: lightModeActive }">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="lightmode__toggler-svg--dark">
				<path d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="lightmode__toggler-svg--light">
				<path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
			</svg>
		</button>
	</div>
</nav>
</template>

<script>
import {
	EventBus
} from '@/assets/js/eventbus.js';

export default {

	name: 'navigation',
	data: function() {
		return {
			lightModeActive: false,
			navOverlayActive: false,
			links: [{
					id: 0,
					text: 'intro.',
					page: '/'
				},
				{
					id: 1,
					text: 'profil.',
					page: '/profil'
				},
				{
					id: 2,
					text: 'arbeit.',
					page: '/arbeit'
				},
				{
					id: 3,
					text: 'kontakt.',
					page: '/kontakt'
				}
			]
		}
	},
	methods: {
		/* hide nav on router-link click */
		hideNav: function(e) {
			e.preventDefault();
			e.target.classList.add('blink');
			var overlayContainer = document.getElementsByClassName('js_nav__overlay');

			overlayContainer[0].classList.remove('nav__overlay--active');
			this.navOverlayActive = false;

			document.body.classList.remove("noscroll");
		},
		toggleLightMode: function() {
			this.lightModeActive = !this.lightModeActive;
			var app = document.getElementById('app');
			app.classList.toggle('sol');
		},
		toggleBodyScroll: function() {
			document.body.classList.toggle("noscroll");
		}
	},
	mounted() {
		var that = this;
		EventBus.$on('menu-cta-clicked', function() {
			that.navOverlayActive = true;
		});

	}
}
</script>

<style>
.nav {
	justify-content: space-between;
	align-items: center;
	position: absolute;
	left: 50%;
	z-index: 2;
	display: block;
	display: flex;
	width: 100%;
	height: 4rem;
	transform: translateX(-50%) !important;
}

.nav__desktop {
	justify-content: space-between;
	align-items: center;
	display: flex;
	width: 100%;
	max-width: 100rem;
	padding-right: 1.5rem;
	padding-left: 1.5rem;
	margin: 0 auto;
}

.nav__main {
	margin-top: 10px;
}

.name {
	z-index: 3;
}

.name__heading {
	font-size: 1rem;
	text-transform: lowercase;
}

.name__link {
	font-size: 18px;
	font-weight: 300;
	color: #fff;
	text-decoration: none;
}

.name__span {
	position: relative;
	display: inline-block;
	transform: translateY(0);
	transition: transform .3s ease-out;
}

.name__span:nth-child(2) {
	transition-delay: .1s;
}

.name__span:nth-child(3) {
	transition-delay: .13s;
}

.name__span:nth-child(4) {
	transition-delay: .16s;
}

.name__span:nth-child(5) {
	transition-delay: .19s;
}

.name__span:nth-child(6) {
	transition-delay: .21s;
}

.name__span:nth-child(7) {
	transition-delay: .24s;
}

.name__span:nth-child(8) {
	transition-delay: .27s;
}

.name__span:nth-child(9) {
	transition-delay: .3s;
}

.name__span:nth-child(10) {
	transition-delay: .33s;
}

.name__span:nth-child(11) {
	transition-delay: .36s;
}

.name__span:nth-child(12) {
	transition-delay: .39s;
}

.name__link:hover .name__span {
	transform: translateY(-5px);
}

.menu__list {
	counter-increment: start -1;
	flex-direction: column;
	position: relative;
	display: flex;
	width: 100%;
	padding: 0;
	margin: 0;
	margin-bottom: 3rem;
	text-align: left;
	list-style: none;
}

.menu__item {
	position: relative;
	display: inline-block;
}


/* base styles before anim starts */
.slide-fade-bottom-enter-active {
	transition: transform 1.3s cubic-bezier(0.38, 1, 0.87, 0.98), opacity 1.3s cubic-bezier(0.38, 1, 0.87, 0.98);
}

.slide-fade-bottom-leave-active {
	transition: opacity .8s;
}

.slide-fade-bottom-enter {
	transform: translateY(40%);
	opacity: 0;
}

.slide-fade-bottom-leave-to {
	opacity: 0;
}


.slide-fade-bottom-enter-active:nth-child(1) {
	transition-delay: .3s;
}

.slide-fade-bottom-enter-active:nth-child(2) {
	transition-delay: .5s;
}

.slide-fade-bottom-enter-active:nth-child(3) {
	transition-delay: .7s;
}

.slide-fade-bottom-enter-active:nth-child(4) {
	transition-delay: .9s;
}

.menu__link {
	/* fluid typography with  font size 60px @ 320px width , 60px @ 1400 width */
	position: relative;
	display: inline-block;
	font-size: calc(60px + (100 - 50) * ((100vw - 320px) / (1400 - 320)));
	font-weight: 700;
	color: var(--blue);
	text-align: left;
	text-decoration: none;
	text-shadow: none;
	-webkit-transform: translateZ(0);
	transition: color .4s ease-out, text-shadow .4s ease-out;
}

.menu__link.blink {
	animation: blink 1s ease-out forwards;
}

.menu__link:hover,
.menu__link.is-active {
	text-shadow: -1px -1px 0 var(--blue), 1px -1px 0 var(--blue), -1px 1px 0 var(--blue), 1px 1px 0 var(--blue);
	color: var(--grey-dark);
}

.menu__link.is-active:hover {
	text-shadow: none;
	color: var(--blue);
}

.menu__link:nth-child(2) {
	animation-delay: 0.15s;
}

.menu__link:nth-child(3) {
	animation-delay: 0.3s;
}

.menu__link:nth-child(4) {
	animation-delay: 0.45s;
}

.menu__link:nth-child(5) {
	animation-delay: 0.6s;
}

.nav__offcanvas-button {
	border: 0;
}

.nav__overlay {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: block;
	width: 100vw;
	height: 100vh;
	background-color: var(--grey-dark);
	opacity: 0;
	visibility: hidden;
	transition: opacity .3s ease-in, visibility .3s;
	transition-delay: .4s;
}

.overlay__content {
	align-items: flex-end;
	display: flex;
	width: 100%;
	height: 100%;
	background-color: var(--grey-dark);
}

.nav__overlay--active {
	opacity: 1;
	visibility: visible;
	transition: opacity .35s ease-in, visibility .35s;
}

.menu-trigger {
	position: relative;
	z-index: 3;
	width: auto;
	width: 86px;
	height: 35px;
	padding: 10px;
	padding-right: 0;
	font-size: 17px;
	font-weight: 300;
	color: #fff;
	cursor: pointer;
	background: transparent;
	border: 0;
}

.sol .menu-trigger-button {
	color: #1b1a1a;
}

.sol .menu-trigger-line {
	background: #1b1a1a;
}

.menu-trigger:focus {
	outline: 0;
	box-shadow: none;
}

.menu-trigger__letter {
	display: inline-block;
	font-family: inherit;
}

.menu-trigger__line {
	position: relative;
	bottom: 4px;
	display: inline-block;
	width: 16px;
	height: 1px;
	margin-top: 0;
	margin-right: 10px;
	background: #fff;
	transition: transform .3s ease-out;
}

.menu-trigger:hover .menu-trigger__line {
	transform: rotate(0);
}

.menu-trigger.menu-trigger--active .menu-trigger__line {
	transform: rotate(-45deg);
}

.lightmode {
	position: fixed;
	z-index: 3;
	right: 36px;
	bottom: 35px;
	transform: translateX(70px);
	animation: slide-from-right .8s ease-out forwards;
	animation-delay: 5.6s;
}

.lightmode__toggler {
	position: relative;
	width: 20px;
	height: 20px;
	cursor: pointer;
}

.lightmode::before {
	content: '';
	position: absolute;
	left: -12px;
	font-size: 14px;
	text-transform: uppercase;
	transform: translateY(-15px);
	opacity: 0;
	transition: all .7s ease;
}

#app:not(.sol) .lightmode:hover::before {
	content: 'Light!';
	opacity: 1;
	transform: translateY(-25px);
	/* transition: all .7s ease; */
}

#app.sol .lightmode:hover::before {
	content: 'Dark!';
	opacity: 1;
	transform: translateY(-25px);
	color: #1b1a1a;
	/* transition: all .7s ease; */
}

.lightmode__toggler-svg--dark {
	fill: #fff;
	display: none;
	position: relative;
	left: 1px;
	top: 1px;
	width: 100%;
	height: 100%;
}

.lightmode__toggler-svg--light {
	transition: all 2s ease-out;
	width: 100%;
	height: 100%;
	fill: #4e4747;
}

.lightmode__toggler:hover .lightmode__toggler-svg--light {
	fill: yellow;
	transform: rotate(180deg);
}

.lightmode__toggler.active .lightmode__toggler-svg--dark {
	display: block;
	fill: #1b1a1a;
}

.lightmode__toggler.active .lightmode__toggler-svg--light {
	display: none;
}

/* === KEYFRAMES === */
@keyframes blink {
	0% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}


@keyframes slide-from-right {
	from {
		transform: translateX(70px);
	}

	to {
		transform: translateX(0);
	}
}

/* === /KEYFRAMES === */
/* === RESPONSIVE === */
@media only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) {
	.menu__list {
		margin-bottom: 7rem;
	}
}

@media only screen and (device-width : 414px) and (device-height : 896px) and (-webkit-device-pixel-ratio : 2) {
	.menu__list {
		margin-bottom: 7rem;
	}
}

@media screen and (min-width: 560px) {
	.nav {
		height: 5rem;
	}

}

@media screen and (min-width: 688px) {

	.nav__desktop {
		padding-left: 5rem;
		padding-right: 5rem;
	}
}
@media screen and (min-width: 992px) {
	.menu-trigger:hover .menu-trigger__line {
		transform: rotate(-45deg)
	}

	.menu__list {
		margin-bottom: 0;
	}
}

@media screen and (min-width: 1440px) {
	.menu__link {
		font-size: 100px;
	}
}

/* === /RESPONSIVE === */
</style>
