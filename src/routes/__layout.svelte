<script lang="ts" context="module">
	export const load = async ({ url }: any) => {
		return {
			props: { url }
		};
	};
</script>

<script lang="ts">
	interface Url {
		href: string;
		pathname: string;
	}

	import { navigating } from '$app/stores';
	import { loading } from '$lib/stores/loading';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '$lib/styles/index.css';
	import logoImg from '$lib/img/logo.png';
	import { links } from '../lib/stores/stores';

	export let url: Url;

	console.log(url.pathname);

	$: $loading = !!$navigating;
	$: isClicked = false;
</script>

<svelte:head>
	<link rel="icon" href={logoImg} />
</svelte:head>

<button
	type="button"
	class={`w-14 h-14 fixed z-30 focus:outline outline-2 outline-emerald-400 top-0 right-0 bg-black transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-y-2`}
	on:click={() => {
		isClicked = !isClicked;
	}}
>
	<span class="w-8 h-1 bg-white" />
	<span class="w-8 h-1 bg-white" />
	<span class="w-8 h-1 bg-white" />
</button>

<div
	class={`h-screen w-full md:w-96 bg-emerald-400 right-0 transition-all duration-500 fixed ${
		isClicked ? 'translate-x-0' : 'translate-x-full'
	} top-0 z-20`}
>
	<div class="p-6 flex font-mono flex-col" role="menu">
		{#each links as link}
			<a
				role="menuitem"
				class="block p-3 font-black outline-none transition-colors duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white border-b-2 border-black"
				on:click={() => {
					isClicked = $loading;
				}}
				href={link.href}>{link.text}</a
			>
		{/each}
	</div>
</div>

<main
	class={`min-h-screen transition-all duration-500 w-full bg-black ${
		isClicked ? '-translate-x-96 opacity-25' : 'translate-x-0'
	}`}
>
	<PageTransition url={url.href}><slot class={``} /></PageTransition>
</main>

<style>
	.loading-true {
		left: 0%;
		transition: all 500ms ease-in-out;
	}

	.loading-false {
		left: 100%;
		transition: all 500ms ease-in-out;
	}
</style>
