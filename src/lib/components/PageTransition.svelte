<script lang="ts">
	import { fly } from 'svelte/transition';
	export let url: string;
	const duration: number = 500;
</script>

{#key url}
	<div
		in:fly={{ duration: duration, delay: duration, y: 120 }}
		out:fly={{ duration: duration, y: -120 }}
	>
		<slot />
	</div>
{/key}
