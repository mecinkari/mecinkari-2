<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { onMount } from 'svelte';
	import logoImg from '../lib/img/logo.png';

	const title: string = 'Mecinkari';

	onMount((): void => {
		let parallaxObj = document.getElementsByClassName(
			'parallax'
		) as HTMLCollectionOf<HTMLElement> | null;

		document.addEventListener('mousemove', (e: MouseEvent) => {
			if (parallaxObj != null) {
				for (let i = 0; i < parallaxObj.length; i++) {
					let el = parallaxObj[i];
					let move_val: string = el.getAttribute('data-value')!;
					let val: number = parseInt(move_val);
					let x: number = (window.innerWidth - e.pageX * val) / 100;
					let y: number = (window.innerHeight - e.pageY * val) / 100;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}
			}
		});
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<PageTransition>
	<section class="min-h-screen flex justify-center items-center w-full bg-black">
		<img src={logoImg} alt="img" class="absolute mix-blend-screen opacity-[0.25]" data-value={1} />
		<div class="py-12 px-12 font-mono z-30" data-value={-1}>
			<h1 class="text-6xl mt-4 font-black text-white">
				I'm <span class="bg-emerald-400 text-black md:px-3">{title}</span>
			</h1>
			<p class="text-xl mt-6 font-medium text-white">Freelance Illustrator + Front-end Developer</p>
		</div>
	</section>
</PageTransition>
