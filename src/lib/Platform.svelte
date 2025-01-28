<script lang="ts">
	let {
		platform = 'Platform',
		icon = 'lucide:computer',
		downloads = {
			installer: { format: '.exe', link: '' },
			archive: { format: '.zip', link: '' }
		}
	} = $props();
</script>

<div class="{platform} flex min-w-32 flex-col">
	<iconify-icon {icon} width="96" height="96"></iconify-icon>
	<span class="translate-y-1/2 rounded-3xl bg-[#fddbd5] px-8 py-2 text-center text-black shadow-md"
		>{platform}</span>
	<div
		class="flex h-32 items-center justify-center rounded-xl border-[1px] border-[#646464] bg-[#414141] shadow-md">
		<div class="flex flex-col gap-2">
			<div class="flex justify-between">
				<span class="me-3 text-sm my-auto">Installer</span><span
					class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
					>{downloads.installer.format}</span>
			</div>
			<div class="flex justify-between">
				<span class="me-3 text-sm my-auto">Archive</span><span
					class="flex h-6 w-11 items-center justify-center rounded-md bg-[#fddbd5] text-xs text-black shadow-md"
					>{downloads.archive.format}</span>
			</div>
		</div>
	</div>
</div>
