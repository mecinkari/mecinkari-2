<script lang="ts" context="module">
	export async function load({ fetch }: any) {
		const res = await fetch('/my-works.json');
		const data = await res.json();

		return {
			props: { data }
		};
	}
</script>

<script lang="ts">
	import { urlFor } from '$lib/sanity/client';
	import type { Gallery } from '$lib/types/typings';
	export let data: Gallery[];
</script>

<svelte:head>
	<title>Mecinkari - My works</title>
</svelte:head>

<main class="bg-black min-h-screen flex flex-col justify-center px-12 py-16">
	<h1
		class="text-3xl md:text-6xl font-mono font-black text-white anim-it"
		style:animation-delay={`250ms`}
	>
		My <span class="text-emerald-400">works.</span>
	</h1>

	<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
		{#each data as d, i}
			<div class="aspect-square anim-it" style:animation-delay={`${i * 100 + 200}ms`}>
				<img
					src={urlFor(d.mainImage).url()}
					class="w-full h-full object-cover rounded-xl"
					style="object-position: top center;"
					alt={`${d._id} ${i + 1}`}
				/>
			</div>
		{/each}
	</section>
</main>

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
