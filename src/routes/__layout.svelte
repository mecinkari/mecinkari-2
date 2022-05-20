<script lang="ts">
	import '$lib/styles/index.css';
	import { links } from '../lib/stores/stores';

	let isClicked: boolean = false;
</script>

<div
	class={`w-14 h-14 fixed z-30 top-0 right-0 bg-black transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-y-2`}
	on:click={() => {
		isClicked = !isClicked;
	}}
>
	<span class="w-8 h-1 bg-white" />
	<span class="w-8 h-1 bg-white" />
	<span class="w-8 h-1 bg-white" />
</div>

<div
	class={`h-screen w-full md:w-96 bg-emerald-400 right-0 transition-all  duration-500 fixed ${
		isClicked ? 'translate-x-0' : 'translate-x-full'
	} top-0 z-20`}
>
	<div class="p-6 flex font-mono flex-col">
		{#each links as link}
			<a
				class="block p-3 font-medium transition-colors duration-300 hover:bg-black hover:text-white border-b-2 border-black"
				on:click={() => {
					isClicked = false;
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
	<slot class={``} />
</main>
