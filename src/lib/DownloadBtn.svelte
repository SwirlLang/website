<script lang="ts">
	export let downloads: Array<{ format: string; url: string }> = [{ format: 'deb', url: '' }];
</script>

{#if downloads.length > 1}
	<div class="flex rounded-md overflow-hidden">
		<a
			href={downloads[0].url}
			class="flex bg-[#d8a4ff] px-4 py-2 font-medium text-black shadow-2xl hover:bg-[#e7c6ff]"
			>Download {downloads[0].format}</a>
		{#each downloads.slice(1) as item}
			<a
				href={item.url}
				class="flex bg-[#d8a4ff45] px-4 py-2 font-medium text-white shadow-2xl hover:bg-[#d8a4ff6c]"
				>{item.format}</a>
		{/each}
	</div>
{:else}
	<a
		href={downloads[0].url}
		class="flex rounded-md bg-[#d8a4ff] px-4 py-2 font-medium text-black shadow-2xl hover:bg-[#e7c6ff]"
		>Download {downloads[0].format}</a>
{/if}
