<script lang="ts">
	let { platform = 'Platform', icon = 'lucide:computer', downloads } = $props();
</script>

<div class="{platform} flex min-w-36 flex-col">
	<iconify-icon {icon} width="96" height="96"></iconify-icon>
	<span class="translate-y-1/2 rounded-3xl bg-[#e7c6ff] px-8 py-2 text-center text-black shadow-md"
		>{platform}</span>
	<div
		class="flex flex-col justify-end h-32 rounded-xl border-[1px] border-[#646464] bg-[#414141] shadow-md">
		<div class="flex w-full h-20 flex-col items-center justify-center gap-2 px-5">
			{#each downloads as item}
				<a
					href={item.url}
					class="flex h-7 w-full items-center justify-center rounded-md bg-[#d8a4ff] text-sm font-medium text-black shadow-md"
					>{item.format}</a>
			{/each}
		</div>
		<a href="/docs" class="text-[.7rem] flex justify-center gap-1 text-[#c8c8c8] mb-2 hover:text-[#e2e2e2]"> <iconify-icon icon="uil:external-link-alt" width="14" height="14"></iconify-icon> Install instructions</a>
	</div>
</div>
