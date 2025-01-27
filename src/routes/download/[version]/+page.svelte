<script lang="ts">
	import type { PageProps } from './$types';
	import 'iconify-icon';
	let { data }: PageProps = $props();
</script>

<main class="mt-16 flex flex-col">
	<h1 class="font-medium text-[#bbbbbb]">Download Swirl</h1>
	<div class="version mt-4 flex items-end gap-4">
		<span class="text-5xl/[1.7] font-bold">v</span>
		<span class="text-[10rem] font-bold leading-none">{data.version}</span>
		<span class="build mt-5 self-start rounded-md bg-[#fddbd5] px-2 text-black">Alpha</span>
	</div>
	<div class="platforms mt-8 flex h-96 w-full justify-evenly">
		<div class="windows flex min-w-32 flex-col">
			<iconify-icon icon="uil:windows" width="96" height="96"></iconify-icon>
			<span
				class="translate-y-1/2 rounded-3xl bg-[#fddbd5] px-8 py-2 text-center text-black shadow-md"
				>Windows</span>
			<div
				class="flex h-32 items-center justify-center rounded-xl border-[1px] border-[#646464] bg-[#414141] shadow-md">
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<span class="me-3 text-sm">Installer</span><span
							class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
							>.exe</span>
					</div>
					<div class="flex justify-between">
						<span class="me-3 text-sm">Archive</span><span
							class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
							>.zip</span>
					</div>
				</div>
			</div>
		</div>
		<div class="linux flex min-w-32 flex-col">
			<iconify-icon icon="uil:linux" width="96" height="96"></iconify-icon>
			<span
				class="translate-y-1/2 rounded-3xl bg-[#fddbd5] px-8 py-2 text-center text-black shadow-md"
				>Linux</span>
			<div
				class="flex h-32 items-center justify-center rounded-xl border-[1px] border-[#646464] bg-[#414141] shadow-md">
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<span class="me-3 text-sm">Installer</span><span
							class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
							>.deb</span>
					</div>
					<div class="flex justify-between">
						<span class="me-3 text-sm">Archive</span><span
							class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
							>.tar.gz</span>
					</div>
				</div>
			</div>
		</div>
		<div class="macos flex min-w-32 flex-col">
			<iconify-icon icon="uil:apple" width="96" height="96"></iconify-icon>
			<span
				class="translate-y-1/2 rounded-3xl bg-[#fddbd5] px-8 py-2 text-center text-black shadow-md"
				>Mac OS</span>
			<div
				class="flex h-32 items-center justify-center rounded-xl border-[1px] border-[#646464] bg-[#414141] shadow-md">
				<div class="flex flex-col gap-2">
					<div class="flex justify-between">
						<span class="me-3 text-sm">Installer</span><span
							class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
							>.dmg</span>
					</div>
					<div class="flex justify-between">
						<span class="me-3 text-sm">Archive</span><span
							class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
							>.zip</span>
					</div>
				</div>
			</div>
		</div>
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
