<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ duration: 300, delay: 300, y: 120 }} out:fly={{ duration: 250, y: -120 }}>
	<slot />
</div>
