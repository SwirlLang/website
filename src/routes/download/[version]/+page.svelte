<script lang="ts">
	import type { PageProps } from './$types';
	import 'iconify-icon';
	import Platform from '$lib/Platform.svelte';

	let { data }: PageProps = $props();
</script>

<main class="mt-24 flex flex-col max-sm:mb-8">
	<h1 class="text-2xl font-medium text-[#bbbbbb] md:text-3xl">Download Swirl</h1>
	<div class="version mt-4 flex flex-wrap items-end justify-center gap-4 px-4">
		<span class="text-5xl/[1.7] font-bold">v</span>
		<span class="text-[10rem] font-bold leading-none">{data.version}</span>
		<div class="mt-3 flex flex-col gap-2 self-start md:mt-5">
			{#if data.build}
				<span class="build self-center rounded-md bg-[#d8a4ff] px-2 text-black sm:self-start"
					>{data.build}</span>
			{/if}
			<a href={data.releaseNotes} target="_blank" class="flex items-center gap-1 text-slate-300"
				>Release Notes <iconify-icon icon="tabler:external-link" width="20" height="20"
				></iconify-icon
				></a>
		</div>
	</div>
	<div class="platforms mt-12 min-h-96 w-full">
		<div class="flex flex-wrap justify-evenly gap-10 px-8">
			<Platform
				platform="Windows"
				icon="uil:microsoft"
				info="x64, Windows 10+"
				downloads={data.downloads?.windows} />
			<Platform
				platform="Linux"
				icon="uil:linux"
				info="x64, Debian, Fedora"
				downloads={data.downloads?.linux} />
			<Platform
				platform="MacOS"
				icon="uil:apple"
				info="x64, macOS 10.15+"
				downloads={data.downloads?.macos} />
		</div>
		<p class="mb-8 mt-12 px-4 text-center text-lg text-[#bbbbbb]">
			Need help? Check out the <a href="/docs/installation" class="text-[#d8a4ff] hover:underline"
				>installation instructions.</a>
		</p>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		.version {
			& > :nth-child(1) {
				font-size: clamp(2.5rem, 10vw, 3rem);
			}
			& > :nth-child(2) {
				font-size: clamp(5.5rem, 15vw, 8rem);
				text-shadow: 0px 0px 60px #d8a4ff67;
			}
			& > :nth-child(3) {
				font-size: clamp(0.5rem, 10vw, 1rem);
			}
		}
	}
</style>
