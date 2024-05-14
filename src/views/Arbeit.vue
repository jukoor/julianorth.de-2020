<template>
<section class="section section--projects">

	<SectionIntro title="arbeit." number="02" />

	<Textblock v-bind:textblock="textblocks[0].textblock" v-bind:textblocktitle="textblocks[0].textblocktitle" v-bind:textblocktitle2="textblocks[0].textblocktitle2" v-bind:sectionclass="textblocks[0].sectionclass" />

	<ProjectsSlider />

	<Footerbar />
</section>
</template>

<script>
import SectionIntro from '@/components/sceleton/SectionIntro'
import Textblock from '@/components/Textblock'
import ProjectsSlider from '@/components/ProjectsSlider'
import Footerbar from '@/components/sceleton/Footerbar'


export default {
	name: 'Arbeit',
	methods: {
	},
	components: {
		SectionIntro,
		Textblock,
		ProjectsSlider,
		Footerbar
	},
	data() {
		return {
			textblocks: [{
				sectionclass: 'section__block--newego',
				textblocktitle: "Ausgewählte",
				textblocktitle2: "Projekte",
				textblock: ["Webprojekte an denen ich während meiner Zeit bei NEW.EGO maßgeblich gearbeitet habe."]
			}],
			videoplaying: false
		}
	},
	created() {

	},
	mounted() {

	},
	destroyed() {

	}
}
</script>


<style scoped>
.hide {
	display: none !important;
}

[data-aos="custom-fade-left"] {
	opacity: 0;
}

[data-aos="custom-fade-left"].aos-animate {
	animation: fade-left 1s .5s 1 ease-out forwards;
}

.paragrah__link--outline {
	align-self: flex-start;
	display: inline-block;
	min-width: 173px;
	padding: .6rem .9rem;
	margin-top: 15px;
	font-size: 1rem;
	line-height: 1rem;
	color: #fff;
	text-align: center;
	text-decoration: none;
	border: 1px solid white;
	transition: background-color .3s ease-out;
}

.paragrah__link--outline:hover {
	background: #fff;
	color: var(--grey-dark);
}

.section__block--mockup {
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
}

.textblock--ctas {
	margin-top: -50px;
	margin-bottom: 90px;
}

.mockup-container {
	cursor: pointer;
	max-width: 260px;
	height: auto;
	margin: 0 auto;
	order: 2;
	margin-bottom: 50px;
}
.mockup-container__img {
	width: 100%;
}
.mockup-container__video {
	width: 100%;
	height: auto;
}

.mockup__phone {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	max-width: 280px;
}

.mockup-container__playbtn {
	box-sizing: border-box;
	border-radius: 50px;
	width: 100%;
	height: 100%;
	padding: 10px calc(50% - 50px);
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	opacity: 0.95;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.2);
	transition: opacity 0.5s ease-out;
}

.mockup-container__playbtn.hide {
	transition: opacity 0.5s ease-out;
	opacity: 0;
}

/* === RESPONSIVE === */
@media screen and (min-width: 560px) {
	.mockup-container {
		margin-left: 3rem;
	}
}

@media screen and (min-width: 992px) {
	.mockup-container {
		width: 300px;
		/* margin-left: 1.2rem; */
		margin-right: 100px;
	}
	.section__block--mockup {
		flex-direction: row;
		padding-top: 4rem;
		padding-bottom: 6rem;
	}

	.textblock--ctas {
		margin-top: 0;
		margin-left: 0;
		margin-bottom: 0;
	}

	.mockup-container {
		order: 0;
	}
}

@media screen and (min-width: 1440px) {
	.section__block--mockup {
		padding-bottom: 8rem;
	}
}

/* === /RESPONSIVE === */
</style>