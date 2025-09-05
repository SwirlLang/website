<script lang="ts">
	let { platform = 'Platform', icon = 'lucide:computer', downloads } = $props();
</script>

<div class="{platform} flex min-w-36 flex-col">
	<iconify-icon {icon} width="96" height="96" style="color: #d6d6d6;"></iconify-icon>
	<span
		class="translate-y-1/2 rounded-3xl border border-[#646464] bg-[#1b1b1b] px-8 py-2 text-center font-bold shadow-md"
		>{platform}</span>
	<div
		class="flex h-32 flex-col justify-end rounded-xl border-[1px] border-[#646464] bg-[#313131] shadow-2xl">
		<div class="flex h-20 w-full flex-col items-center justify-center gap-2 px-5">
			{#each downloads as item}
				<a
					href={item.url}
					class="flex h-7 w-full items-center justify-center rounded-md bg-[#d8a4ff] text-sm font-medium text-black shadow-md hover:bg-[#e7c6ff]"
					>{item.format}</a>
			{/each}
		</div>
	</div>
</div>
