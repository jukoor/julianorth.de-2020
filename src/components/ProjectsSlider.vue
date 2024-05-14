<template>
<div class="section__block section__heading section__block--darkgrey section__block--padded section__block--projects-newego" data-aos="custom-fade-left">

	<div class="projects">
		<swiper ref="mySwiper" :options="swiperOption">
			<swiper-slide v-for="(project, key) in projects">
				<div class="project__card">
					<span class="project__id">{{ project.id }}</span>
					<p class="project__brand">{{ project.brand }}</p>
					<a :href="project.url" class="cta">
						<span class="cta__text">Seite besuchen</span>
						<span class="cta__arrow cta__arrow--first"></span>
						<span class="cta__arrow cta__arrow--second"></span>
					</a>
				</div>
			</swiper-slide>

		</swiper>

		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-next" slot="button-next"></div>

	</div>

</div>
</template>

<script>
import {
	Swiper,
	SwiperSlide
} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
	name: 'projectsslider',
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			swiperOption: {
				slideToClickedSlide: true,
				slidesPerView: 1,
				speed: 650,
				spaceBetween: 30,
				centeredSlides: true,
				grabCursor: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction'
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					1025: {
						slidesPerView: 4,
						spaceBetween: 40
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
			},
			projects: [{
				id: 1,
				brand: 'Max-Planck-Institute',
				url: 'https://www.mpisoc.mpg.de/'
			}, {
				id: 2,
				brand: 'ImmoKEY',
				url: 'https://www.immokey.com/'
			}, {
				id: 3,
				brand: 'ALBA Group',
				url: 'https://www.alba.info/'
			}, {
				id: 4,
				brand: 'Flottweg',
				url: 'https://www.flottweg.com/'
			}, {
				id: 5,
				brand: 'Accentro',
				url: 'https://www.accentro.de/'
			}, {
				id: 6,
				brand: 'Altötting',
				url: 'https://www.altoetting.de/'
			}]
		}
	},
	methods: {},
	props: {},
	created() {},
	mounted() {},
	destroyed() {}
}
</script>


<style scoped>
[data-aos="custom-fade-left"] {
	opacity: 0;
}

.swiper-button-prev:after,
.swiper-button-next:after {
	color: #fff;
	font-size: 20px;
}

.swiper-button-prev,
.swiper-button-next {
	z-index: 100;
	outline: 0;
}

.swiper-button-next {
	left: auto;
	top: auto;
	bottom: -13px;
	right: calc(50% - 50px);
}

.swiper-button-prev {
	right: auto;
	top: auto;
	bottom: -13px;
	left: calc(50% - 50px);
}

.swiper-container {
	height: 300px;
	width: 100%;
}

.swiper-slide {
	width: 180px;
	height: 300px;
}

.swiper-pagination {
	display: flex;
	width: 100%;
	bottom: 0;
	justify-content: center;
	font-size: 1.4rem;
	z-index: 0;
}


.swiper-pagination-bullet {
	flex: 1;
	border-radius: 0;
	width: auto;
	background: rgba(255, 255, 255, 0.5);
	margin-right: 15px;
	outline: 0;
}

.swiper-pagination-bullet:last-child {
	margin-right: 0;
}

.swiper-pagination-bullet-active {
	background: rgba(255, 255, 255, 0.9);
}

.section__block--projects-newego {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	margin-bottom: 35px !important;
	padding-top: 0;
}

.paragraph--selected-projects {
	flex: 0 0 30%;
	font-family: 'Cardo', Helvetica, serif;
}

.projects__list {
	height: 100%;
	display: flex;
}

.projects {
	height: 350px;
	width: 100%;
	position: relative;
}

.cta {
	cursor: pointer;
	left: auto;
	bottom: 9%;
	left: 10%;
	font-size: 0.9rem;
	opacity: .7;
	color: #fff;
	position: absolute;
	padding: 10px 10px 5px 0px;
	z-index: 1;
	border-bottom: 3px solid #fff;
	opacity: 0;
	transition: opacity .3s ease-out;
}

.swiper-slide-active .cta {
	opacity: 1;
}

.cta__text {
	display: inline-block;
	margin-right: 35px;
	letter-spacing: 1px;
	transition: padding-left .3s ease-out;
	min-width: 40px;
	text-align: left;
}

.cta:hover .cta__text {
	padding-left: 8px;
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

.swiper-slide {
	opacity: 0.3;
	transition: opacity .3s ease-out;
	background-image: linear-gradient(19deg, rgba(80, 168, 183, 0.9095927570043718) 29%, rgba(252, 154, 148, 0.5) 150%), linear-gradient(16deg, rgba(110, 94, 214, 0.10017783349371423) 16%, rgba(234, 150, 117, 0.5) 156%), linear-gradient(163deg, rgba(70, 39, 181, 0.13589073709410737) 77%, rgba(252, 189, 176, 0.5) 101%), linear-gradient(14deg, rgba(66, 141, 191, 0.43964996801353395) 40%, rgba(252, 136, 116, 0.5) 0%);
	background-blend-mode: normal, screen, normal, normal;

}

.swiper-slide:nth-child(2) {
	background-image: linear-gradient(151deg, rgba(48, 173, 211, 0.3193553104990612) 35%, rgba(249, 164, 177, 0.5) 128%), linear-gradient(0deg, rgba(5, 7, 132, 0.03064917661232558) 2%, rgba(247, 161, 155, 0.5) 172%), linear-gradient(127deg, rgba(128, 94, 214, 0.035834497020567735) 21%, rgba(244, 164, 182, 0.5) 138%), linear-gradient(29deg, rgba(33, 119, 150, 0.6325110059702246) 27%, rgba(255, 198, 206, 0.5) 81%);
	background-blend-mode: lighten, soft-light, hue, lighten;
}

.swiper-slide:nth-child(3) {
	background-image: linear-gradient(80deg, rgba(94, 226, 249, 0.34182840961969774) 36%, rgba(242, 173, 150, 0.5) 82%), linear-gradient(26deg, rgba(24, 244, 244, 0.2210176437240381) 67%, rgba(255, 168, 184, 0.5) 78%), linear-gradient(56deg, rgba(32, 97, 163, 0.38185181441482263) 21%, rgba(252, 156, 174, 0.5) 120%), linear-gradient(108deg, rgba(58, 111, 158, 0.5467128286412264) 71%, rgba(239, 136, 150, 0.5) 179%);
	background-blend-mode: color, color, overlay, multiply;
}

.swiper-slide:nth-child(4) {
	background-image: linear-gradient(124deg, rgba(101, 196, 237, 0.4085725791192336) 10%, rgba(247, 131, 177, 0.5) 43%),linear-gradient(39deg, rgba(47, 204, 252, 0.12374004344823386) 46%, rgba(249, 172, 177, 0.5) 132%),linear-gradient(91deg, rgba(19, 89, 130, 0.23003253323084016) 22%, rgba(252, 166, 173, 0.5) 157%),linear-gradient(110deg, rgba(14, 158, 206, 0.14840913532212818) 3%, rgba(249, 177, 172, 0.5) 143%);
	background-blend-mode: multiply,lighten,hue,hue;
}

.swiper-slide:nth-child(5) {
	background-image: linear-gradient(108deg, rgba(10, 46, 107, 0.1804239122989808) 75%, rgba(244, 127, 166, 0.5) 136%), linear-gradient(97deg, rgba(76, 135, 255, 0.09828922186328626) 71%, rgba(255, 168, 194, 0.5) 132%), linear-gradient(165deg, rgba(67, 107, 160, 0.39328115914999673) 30%, rgba(252, 195, 186, 0.5) 116%), linear-gradient(166deg, rgba(27, 3, 183, 0.01857645821413456) 3%, rgba(255, 215, 204, 0.5) 145%);
	background-blend-mode: lighten, soft-light, normal, multiply;
}

.swiper-slide:nth-child(6) {
	background-image: linear-gradient(17deg, rgba(54, 99, 165, 0.799288128262093) 24%, rgba(252, 153, 168, 0.5) 99%), linear-gradient(134deg, rgba(19, 27, 132, 0.1979369732072258) 0%, rgba(249, 184, 189, 0.5) 159%), linear-gradient(46deg, rgba(59, 97, 211, 0.3789521047060542) 5%, rgba(247, 172, 145, 0.5) 40%), linear-gradient(170deg, rgba(14, 123, 201, 0.32710462005389873) 33%, rgba(255, 171, 135, 0.5) 71%);
	background-blend-mode: lighten, overlay, hard-light, hue;
}

.swiper-slide-active {
	opacity: 1;
}

.paragraph__heading--projects {
	font-size: 5vw;
	color: var(--grey-light);
}

.project__card {
	display: block;
	height: 100%;
	position: relative;
	text-decoration: none;
}

.project__id {
	font-size: 3rem;
	font-weight: 700;
	font-family: 'Cardo', Helvetica, serif;
	color: rgba(255, 255, 255, .7);
	display: inline-block;
	position: absolute;
	top: 5%;
	left: 10%;
	line-height: 3rem;
}

.project__brand {
	position: absolute;
	bottom: 9%;
	left: 10%;
	color: #1c1a1a;
	font-size: 1.2rem;
	transform: translateY(0);
	transition: transform .4s ease-out;
}

.swiper-slide-active .project__brand {
	transform: translateY(-40px);
}

.swiper-pagination {
	font-size: 1rem;
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
@media screen and (min-width: 992px) {
	.section__block--projects-newego {
		padding-top: 4rem;
		margin-bottom: 100px !important;
	}

	.swiper-pagination {
		font-size: 1.4rem;
	}

	.projects {
		height: 365px;
	}

	.swiper-button-next:after,
	.swiper-button-prev:after {
		font-size: 30px;
	}

	.swiper-button-next {
		right: calc(50% - 60px);
		bottom: -10px;
	}

	.swiper-button-prev {
		left: calc(50% - 60px);
		bottom: -10px;
	}
}
/* === /RESPONSIVE === */

</style>
