<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import logoImg from '../lib/img/logo.png';

	const title: string = 'Mecinkari';
</script>

<svelte:head>
	<link rel="icon" href={logoImg} />
	<title>{title}</title>
</svelte:head>

<PageTransition>
	<section class="min-h-screen grid md:grid-cols-2 items-center w-full bg-black">
		<div class="py-12 px-12 md:text-right font-mono">
			<p class="text-xl font-medium text-white">Hi there 👋</p>
			<h1 class="text-6xl font-black text-white">I'm {title}</h1>
			<p class="text-xl mt-6 font-medium text-emerald-500">
				Freelance Illustrator + Front-end Developer
			</p>
		</div>

		<div
			class="hidden md:block w-72 lg:w-96 h-72 lg:h-96 image"
			style={`background-image: url(${logoImg}); background-size: cover`}
		/>
	</section>
</PageTransition>

<style>
	.image {
		animation: flying 6000ms ease 0ms infinite forwards;
	}

	@keyframes flying {
		0% {
			opacity: 1;
		}
		9% {
			opacity: 1;
		}
		10% {
			opacity: 0.2;
		}
		11% {
			opacity: 1;
		}
		24% {
			opacity: 1;
		}
		25% {
			opacity: 0.2;
		}
		26% {
			opacity: 1;
		}
		49% {
			opacity: 1;
		}
		50% {
			opacity: 0.2;
		}
		51% {
			opacity: 1;
		}
		74% {
			opacity: 1;
		}
		75% {
			opacity: 0.2;
		}
		76% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
</style>
