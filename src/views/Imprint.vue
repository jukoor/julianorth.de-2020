<template>
<section class="section section--imprint" id="Imprint">

	<SectionIntro title="legal." number="04" />


	<div class="section__block section__block--padded">

		<div class="textblock">
			<h2 class="textblock__heading" data-aos="grow-fade-in">Impressum</h2>
			<div class="textblock__container" data-aos="custom-fade-left">
				<h3 class="textblock__subheading">Verantwortlich für diese Website<br>// Angaben gemäß §5 TMG</h3>
				<p class="textblock__paragraph">
					Julian Orth<br>
				</p>
			</div>
			<div class="textblock__container" data-aos="custom-fade-left">
				<h3 class="textblock__subheading">Haftungsausschluss</h3>
				<p class="textblock__paragraph">
					Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
					eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
					forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
					Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
				</p>
			</div>
			<div class="textblock__container" data-aos="custom-fade-left">
				<h3 class="textblock__subheading">Haftung für Links</h3>
				<p class="textblock__paragraph">
					Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
					Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
					inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
				</p>
			</div>
			<div class="textblock__container" data-aos="custom-fade-left">
				<h3 class="textblock__subheading">Urheberrecht</h3>
				<p class="textblock__paragraph">
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
					der
					schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
					die
					Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
					Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
				</p>
			</div>
			<div class="textblock__container" data-aos="custom-fade-left">
				<h3 class="textblock__subheading">Rechtswirksamkeit dieses Haftungsausschlusses</h3>
				<p class="textblock__paragraph">
					Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig
					entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
				</p>
			</div>
		</div>

	</div>


	<Footerbar />
</section>
</template>

<script>
import SectionIntro from '@/components/sceleton/SectionIntro'
import Footerbar from '@/components/sceleton/Footerbar'


export default {
	name: 'imprint',
	data() {
		return {}
	},
	props: {},
	components: {
		SectionIntro,
		Footerbar
	},
	methods: {

	},
	created() {

	},
	mounted() {

	}
}
</script>


<style>
.section--imprint .textblock__container {}

.textblock__container {
	opacity: 0;
	margin-bottom: 3rem;
	transform: none;
}

.section--imprint .textblock {
	width: 100%;
}

.section--imprint .textblock__paragraph {
	text-align: justify;
	opacity: 1;

}

.textblock__subheading {
	font-weight: 600;
	margin-bottom: 6px;
	font-size: 1.2rem;
	line-height: 1.8rem;
}

.textblock__container[data-aos="custom-fade-left"].aos-animate {
	animation: fade-left 1s .5s 1 ease-out forwards;
}
/* === RESPONSIVE === */
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
/* === /RESPONSIVE === */
</style>
