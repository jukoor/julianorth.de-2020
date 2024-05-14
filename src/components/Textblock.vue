<template>
<div class="section__block section__block--padded" :class="sectionclass">

	<div class="textblock">
		<h2 class="textblock__heading" data-aos="grow-fade-in">{{ textblocktitle }}<br>{{ textblocktitle2 }}</h2>
		<span v-for="workdatesingle in workdate" data-aos="custom-fade-left" class="textblock__date">{{ workdatesingle }}</span>
		<p class="textblock__paragraph" data-aos="custom-fade-left" v-for="textblocksingle in textblock" v-html="textblocksingle">
			{{ textblocksingle }}
		</p>
	</div>

</div>
</template>

<script>
export default {
	name: 'textblock',
	methods: {},
	props: {
		textblock: Array,
		textblocktitle: String,
		textblocktitle2: String,
		sectionclass: String,
		workdate: Array
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
.textblock {
	position: relative;
	padding-left: 1.2rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 45rem;
}

.textblock__date {
	color: #327d9a;
	font-size: 12px;
	display: inline-block;
	width: 100%;
	border-bottom: 1px solid;
	padding-bottom: 5px;
	opacity: 0;
	transform: none;
	margin-bottom: 6px;
}

.textblock__heading {
	position: relative;
	font-size: 2.2rem;
	line-height: 2.5rem;
	font-weight: 800;
	margin-bottom: 2.2rem;
	opacity: 0;
	color: #fff;
	transition: opacity 1.5s ease-out .5s !important;
}

.textblock__heading:before {
	content: '';
	height: 3px;
	width: 0;
	background-color: #fff;
	position: absolute;
	top: 1.5rem;
	right: calc(100% + 15px);
}

.textblock__heading[data-aos="grow-fade-in"].aos-animate {
	opacity: 1;
}

.textblock__heading[data-aos="grow-fade-in"].aos-animate:before {
	animation: grow-left 1s .5s 1 ease-out forwards;
}

.textblock__paragraph {
	margin-bottom: 1.6rem;
	font-size: 1.2rem;
	line-height: 2.1rem;
	font-weight: 300;
	opacity: 0;
	transform: none;
}
.textblock__paragraph a {
	color: #fff;
}
[data-aos="custom-fade-left"].aos-animate {
	animation: fade-left 1s .5s 1 ease-out forwards;
}

[data-aos="custom-fade-left"][data-aos-delay="800"].aos-animate {
	animation-delay: .8s;
}
/* === KEYFRAMES === */
@keyframes grow-left {
	0% {
		width: 0;
	}
	100% {
		width: 34px;
	}
}
/* === /KEYFRAMES === */
/* === RESPONSIVE === */
@media screen and (min-width: 560px) {
	.textblock__paragraph--mb {
		margin-bottom: 5rem;
	}

	.textblock {
		padding-left: 3rem;
	}

	.textblock__heading {
		font-size: 2.7rem;
		line-height: 3.1rem;
		margin-bottom: 4rem;
	}
}

@media screen and (min-width: 688px) {
	.textblock {
		padding-left: 3rem;
		width: 77%;
	}
}

@media screen and (min-width: 992px) {
	.textblock__paragraph--mb {
		margin-bottom: 1rem;
	}
}

/* === /RESPONSIVE === */
</style>