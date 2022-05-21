<script lang="ts">
	import logoImg from '../lib/img/logo.png';

	const title: string = 'Mecinkari';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="min-h-screen flex justify-center items-center w-full bg-black">
	<img
		src={logoImg}
		alt="img"
		class="absolute mix-blend-screen opacity-[0.25] anim-it-image"
		data-value={1}
		style:animation-delay={`250ms`}
	/>
	<div class="py-12 px-12 font-mono z-30 anim-it" data-value={-1} style:animation-delay={`500ms`}>
		<h1 class="text-6xl mt-4 font-black text-white">
			I'm <span class="bg-emerald-400 text-black md:px-3">{title}</span>
		</h1>
		<p class="text-xl mt-6 font-medium text-white">Freelance Illustrator + Front-end Developer</p>
	</div>
</section>

<style>
	.anim-it {
		animation: slide-in;
		animation-duration: 1000ms;
		animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
		animation-direction: normal;
		animation-fill-mode: forwards;
		opacity: 0;
		transform: translateY(3rem);
	}

	.anim-it-image {
		animation: slide-in-image;
		animation-duration: 1000ms;
		animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
		animation-direction: normal;
		animation-fill-mode: forwards;
		opacity: 0;
		transform: translateY(3rem);
	}

	@keyframes slide-in {
		0% {
			opacity: 0;
			transform: translateY(3rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0rem);
		}
	}

	@keyframes slide-in-image {
		0% {
			opacity: 0;
			transform: translateY(3rem);
		}
		100% {
			opacity: 0.25;
			transform: translateY(0rem);
		}
	}
</style>
