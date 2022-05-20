<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import img from '$lib/img/11-5-2022-2123.png';
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
			<ul class="list-disc list-inside">
				<i>Name</i>
				<li>Tamcin</li>
				<li>Mecinkari</li>
			</ul>
			<ul class="list-disc list-inside">
				<i>Birthday</i>
				<li>18 December</li>
			</ul>
			<ul class="list-disc list-inside">
				<i>Hobbies</i>
				<li>Drawing</li>
				<li>Coding</li>
				<li>Watching YouTube</li>
			</ul>
			<ul class="list-disc list-inside">
				<i>Occupations</i>
				<li>Freelance Illustrator</li>
			</ul>
		</div>
	</main>
</PageTransition>

<style>
	i {
		@apply text-emerald-400 not-italic;
	}
</style>
