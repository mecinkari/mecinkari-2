<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<svelte:head>
	<title>Mecinkari - About</title>
</svelte:head>

<PageTransition>
	<main class="bg-black min-h-screen flex flex-col justify-center items-center px-12 py-16">
		<h1 class="text-6xl font-mono font-black text-white">
			About <span class="text-emerald-400">me.</span>
		</h1>

		<div
			class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-xl font-mono font-medium mt-12"
		>
			<ul class="list-disc list-outside anim-it" style:animation-delay={`500ms`}>
				<i>Name</i>
				<li class="ml-5">Tamcin</li>
				<li class="ml-5">Mecinkari</li>
			</ul>
			<ul class="list-disc list-outside anim-it" style:animation-delay={`600ms`}>
				<i>Birthday</i>
				<li class="ml-5">18 December</li>
			</ul>
			<ul class="list-disc list-outside anim-it" style:animation-delay={`700ms`}>
				<i>Hobbies</i>
				<li class="ml-5">Drawing</li>
				<li class="ml-5">Coding</li>
				<li class="ml-5">Watching YouTube</li>
			</ul>
			<ul class="list-disc list-outside anim-it" style:animation-delay={`800ms`}>
				<i>Occupations</i>
				<li class="ml-5">Student at Gunadarma University</li>
				<li class="ml-5">Freelance Illustrator</li>
			</ul>
		</div>
	</main>
</PageTransition>

<style>
	i {
		@apply text-emerald-400 font-black not-italic;
	}

	.anim-it {
		animation: slide-in;
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
</style>
