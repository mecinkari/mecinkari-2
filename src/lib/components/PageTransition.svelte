<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 250, delay: 300 }} out:fade={{ duration: 250 }}>
	<slot />
</div>
