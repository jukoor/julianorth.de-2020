<template>
<section class="section section--about" id="About">

	<SectionIntro title="profil." number="01" />

	<TextTeaserSlide />

	<Textblock v-bind:textblock="textblocks[0].textblock" v-bind:textblocktitle="textblocks[0].textblocktitle" v-bind:textblocktitle2="textblocks[0].textblocktitle2" v-bind:sectionclass="textblocks[0].sectionclass" />

	<Buzzwords />

	<Textblock v-bind:textblock="textblocks[1].textblock" v-bind:textblocktitle="textblocks[1].textblocktitle" v-bind:sectionclass="textblocks[1].sectionclass" v-bind:workdate="textblocks[1].workdate" />

	<Footerbar />

</section>
</template>

<script>
import SectionIntro from '@/components/sceleton/SectionIntro'
import TextTeaserSlide from '@/components/TextTeaserSlide'
import Buzzwords from '@/components/Buzzwords'
import Footerbar from '@/components/sceleton/Footerbar'
import Textblock from '@/components/Textblock'

export default {
	name: 'Profil',
	data() {
		return {
			textblocks: [{
				sectionclass: 'section__block--intro',
				textblocktitle: "Schön dich",
				textblocktitle2: "zu sehen!",
				textblock: [
					"Mein Name ist Julian Orth und ich bin ein Young Professional im spannenden Bereich der Webentwicklung. Seit fünf Jahren arbeite ich als Frontend Entwickler für datenbankgestützte Anwendungen. Ursprünglich aus München arbeite und lebe ich derzeit in Berlin.",
					"Ich liebe es, neue CSS-Techniken zu entdecken und Interaktion zu schaffen. JavaScript-seitig habe ich bereits mit Vue.js (diese Website wurde damit erstellt), React.js, WebGL und Node.js gearbeitet.",
					"Frontend Entwicklung gibt mir die Möglichkeit, in verschiedene Bereiche der digitalen Medienproduktion einzutauchen, wie z. B. Grafikdesign, 3D-Rendering, Typografie, Animation und Fotografie."
				]
			}, {
				sectionclass: 'section__block--worktext',
				textblocktitle: "Arbeit",
				textblock: [
					"Bis vor Kurzem war ich bei der Digitalagentur <a href='https://www.newego.de'>NEW.EGO</a> angestellt, bei welcher ich für mehr als 25 Kunden aus den unterschiedlichsten Branchen wie Technik, Finanzen, Bildung, Lifestyle und Immobilien arbeitete.",
					"Hier entwickelten wir vor allem responsive Webanwendungen auf TYPO3-Basis, aber auch individuelle Lösungen.",
					"Vor meiner jetzigen Tätigkeit war ich verantwortlicher Frontend-Entwickler und Grafikdesigner bei <a href='https://www.mbsupport.de'>mb Support</a> in Regensburg.",
					"Meine Aufgaben umfassten die Entwicklung mehrerer Desktop- und Mobile-Webseiten sowie die Erstellung eines internen Styleguides."
				],
				workdate: ["2018 - 2023", "2016 - 2018"]
			}]
		}
	},
	props: {},
	components: {
		SectionIntro,
		TextTeaserSlide,
		Buzzwords,
		Footerbar,
		Textblock
	},
	methods: {

	},
	created() {

	},
	mounted() {

	},
	destroyed() {

	}
}
</script>


<style>
.section__block--worktext p.textblock__paragraph:nth-of-type(1),
.section__block--worktext p.textblock__paragraph:nth-of-type(3) {
	margin-bottom: 0;
}

.section__block--worktext p.textblock__paragraph:nth-of-type(1),
.section__block--worktext p.textblock__paragraph:nth-of-type(2) {
	order: 1;
}

.section__block--worktext span.textblock__date:nth-of-type(2) {
	order: 5;
}

.section__block--worktext p.textblock__paragraph:nth-of-type(3) {
	order: 6;
}

.section__block--worktext p.textblock__paragraph:nth-of-type(4) {
	order: 7;
}

.section__block--worktext p.textblock__paragraph:nth-of-type(2) {
	margin-bottom: 4rem;
}

.section__content--about {
	z-index: 1;
	display: flex;
	flex-direction: column;
}

.section__block.section__block--introtext {
	padding-top: 8vw;
}

.section__block--workinfo {
	display: flex;
	justify-content: center;
	align-items: center;
}

.paragraph__heading--line {
	overflow: hidden;
	display: flex;
	justify-content: center;
	margin-top: 3rem;
	margin-bottom: 3rem;
	padding: 5rem 0;
	font-weight: 800;
	flex-wrap: wrap;
}

.bar-container {
	overflow: hidden;
	display: inline-block;
}

.bar-container__bar {
	width: 20px;
	height: 2px;
	background: #fff;
}

.heading__text--after {
	margin-left: auto;
}

.heading__text--first {
	background: var(--grey-dark);
	z-index: 1;
	padding-right: 10px;
}

.heading__text--after:before {
	background-color: #fff;
	content: "";
	display: inline-block;
	height: 1px;
	position: relative;
	vertical-align: middle;
	width: 50%;
}

.heading__text--after:before {
	right: 0.5em;
	margin-left: -50%;
}

.paragraph--mw38rem {
	max-width: 38rem;
}

.paragraph--workinfo {
	max-width: 35rem;
	width: 80%;
}

.textblock__paragraph--big {
	font-size: 3rem;
	line-height: 4rem;
	font-weight: 900;
}

.text-box {
	background: linear-gradient(45deg, rgba(92, 148, 99, 1) -13%, rgba(13, 210, 119, 0.2) 100%);
	width: 24rem;
	position: relative;
	padding: 2.5rem;
	height: 24rem;
	margin-top: 5rem;
	align-self: flex-end;
}

.text-box::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	display: block;
	background: linear-gradient(45deg, #a2a2a2 -66%, #1b1a1a 100%);
	z-index: -1;
	left: -6%;
	top: 6%;
	opacity: 0.5;
}

.section__title.section__title--about::after {
	content: attr(data-section-nr);
}

.teaser-heading {
	z-index: 1;
}

.teaser-heading__text {
	font-size: 4rem;
	color: #5c9463;
	display: inline-block;
	background: #1c1a1a;
	padding-right: 1rem;
}

.teaser-heading__text--top {
	margin-bottom: 2rem;
}

.teaser-heading__text--middle {
	padding-left: 3rem;
	margin-bottom: 2rem;
}

.teaser-heading__text--bottom {
	padding-left: 6rem;
}

.section__block--intro p.textblock__paragraph:last-of-type {
	display: none;
}

/* === KEYFRAMES === */
@keyframes fade-left {
	0% {
		opacity: 0;
		transform: translateX(20px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}


/* === /KEYFRAMES === */
/* === RESPONSIVE === */
@media (min-width: 560px) {
	.section__block--intro p.textblock__paragraph:last-of-type {
		display: block;
	}
}

@media (min-width: 992px) {
	.map {
		z-index: 2;
	}
}

/* === /RESPONSIVE === */
</style>
