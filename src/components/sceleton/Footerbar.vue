<template>
<footer class="footer" id="footerAnchor" data-aos="fade-up" data-aos-anchor="footerAnimateAnchor" data-aos-delay="900" data-aos-duration="1000">
	<div class="footer__content">
		<p class="footer__text footer__text--copyright">© Julian Orth {{ new Date().getFullYear() }}</p>
		<p class="footer__text footer__text--joke">Gecoded mit Laptop und Lederhosen 🥨</p>
		<router-link :to="`/imprint`" @click.native="scrollToTop" class="footer__text footer__text--imprint">Impressum</router-link>
	</div>
</footer>
</template>

<script>
export default {
	name: 'footerbar',
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		}
	}
}
</script>

<style scoped>
.footer {
	width: 100%;
	z-index: 1;
}

.footer__content {
	flex-wrap: wrap;
	justify-content: space-between;
	display: flex;
	max-width: 100rem;
	padding: 15px 1.5rem 10px;
	margin: 0 auto;
}

.footer__text {
	flex: 1 100%;
	display: inline-block;
	margin-bottom: 7px;
	font-size: 12px;
	color: #fff;
	text-align: center;
	opacity: 0.7;
}

.footer__text--joke {
	order: 0;
	font-weight: 300;
}

.footer__text--imprint {
	order: 2;
	font-weight: 300;
}

.footer__text--copyright {
	order: 1;
	font-weight: 300;
}
.section__block--intro .footer .footer__text--joke,
.section__block--intro .footer .footer__text--copyright {
	display: none;
}
@media screen and (min-width: 560px) {
	.footer__content {
		padding-left: 5rem;
		padding-right: 5rem;
	}
}

@media screen and (min-width: 688px) {
	.footer__content {
		flex-wrap: nowrap;
		padding-bottom: 25px;
	}

	.footer__text--copyright {
		order: 0;
	}

	.footer__text {
		flex: 0 0 auto;
		margin-bottom: 0;
	}
	.section__block--intro .footer .footer__text--joke,
	.section__block--intro .footer .footer__text--copyright {
		display: block;
	}
	.footer__text {
		opacity: 1;
	}
}
</style>
