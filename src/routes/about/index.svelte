<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import img from '$lib/img/11-5-2022-2123.png';
</script>

<svelte:head>
	<title>Mecinkari - About</title>
</svelte:head>

<PageTransition>
	<main class="bg-black min-h-screen px-12 py-16">
		<h1 class="text-6xl font-mono font-black text-white">
			About <span class="text-emerald-400">me.</span>
		</h1>

		<div class="grid grid-cols-4 gap-8 text-white text-xl font-mono font-medium mt-8">
			<dl>
				<dt><i>Name</i></dt>
				<dd>Tamcin</dd>
				<dd>Mecinkari</dd>
			</dl>
			<dl>
				<dt><i>Birthday</i></dt>
				<dd>18 December</dd>
			</dl>
			<dl>
				<dt><i>Hobbies</i></dt>
				<dd>Drawing</dd>
				<dd>Coding</dd>
				<dd>Watching YouTube</dd>
			</dl>
		</div>
	</main>
</PageTransition>

<style>
	i {
		@apply text-emerald-400 not-italic;
	}
</style>
