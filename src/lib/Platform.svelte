<script lang="ts">
	let { platform = 'Platform', icon = 'lucide:computer', downloads } = $props();
</script>

<div class="{platform} flex min-w-36 flex-col">
	<iconify-icon {icon} width="96" height="96"></iconify-icon>
	<span class="translate-y-1/2 rounded-3xl bg-[#fddbd5] px-8 py-2 text-center text-black shadow-md"
		>{platform}</span>
	<div
		class="flex h-32 items-center justify-center rounded-xl border-[1px] border-[#646464] bg-[#414141] shadow-md">
		<div class="flex items-center gap-2">
			{#each downloads as item}
				<div class="flex justify-between">
					<a
						href={item.url}
						class="flex h-6 w-14 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
						>{item.format}</a>
				</div>
			{/each}
		</div>
	</div>
</div>
