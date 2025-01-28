<script lang="ts">
	import type { PageProps } from './$types';
	import 'iconify-icon';
	import Platform from '$lib/Platform.svelte';

	let { data }: PageProps = $props();
	let download = {
		windows: {
			installer: { format: '.exe', link: '' },
			archive: { format: '.zip', link: '' }
		},
		linux: {
			installer: { format: '.deb', link: '' },
			archive: { format: '.tar.gz', link: '' }
		},
		macos: {
			installer: { format: '.dmg', link: '' },
			archive: { format: '.zip', link: '' }
		}
	};
</script>

<main class="mt-16 flex flex-col">
	<h1 class="font-medium text-[#bbbbbb]">Download Swirl</h1>
	<div class="version mt-4 flex items-end gap-4">
		<span class="text-5xl/[1.7] font-bold">v</span>
		<span class="text-[10rem] font-bold leading-none">{data.version}</span>
		{#if data.build}
			<span class="build mt-5 self-start rounded-md bg-[#fddbd5] px-2 text-black">{data.build}</span>
		{/if}
	</div>
	<div class="platforms mt-8 flex h-96 w-full justify-evenly">
		<Platform platform="Windows" icon="uil:microsoft" downloads={download.windows} />
		<Platform platform="Linux" icon="uil:linux" downloads={download.linux} />
		<Platform platform="MacOS" icon="uil:apple" downloads={download.macos} />
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: 2rem;
		}
	}
</style>
