<script lang="ts">
	import DownloadBtn from '$lib/DownloadBtn.svelte';
	let { platform = 'Platform', icon = 'lucide:computer', info, downloads } = $props();
</script>

<div
	class="{platform} card flex min-h-80 min-w-64 flex-col justify-center rounded-3xl border border-[#b496ff4d] bg-[#d8a4ff1A] text-center shadow-lg">
	<iconify-icon {icon} width="106" height="106"></iconify-icon>
	<h3 class="mt-4 text-4xl font-bold">{platform}</h3>
	<span class="mt-2 text-xs text-slate-300">{info}</span>
	<div class="mt-8 flex flex-col items-center">
		<DownloadBtn {downloads} />
	</div>
</div>

<style lang="scss">
	.card {
		backdrop-filter: blur(10px);
		box-shadow:
			0 10px 30px rgba(0, 0, 0, 0.35),
			inset 1px 1px 0 rgba(255, 255, 255, 0.1),
			inset 0 0 50px rgba(151, 37, 147, 0.1);
		transition: all 0.15s ease-in-out;
		&:hover {
			box-shadow:
				0 20px 40px rgba(0, 0, 0, 0.45),
				inset 1px 1px 0 rgba(255, 255, 255, 0.2),
				inset 0 0 60px rgba(151, 37, 147, 0.2);
			transform: translateY(-5px);
			transition: all 0.15s ease-in-out;
		}
	}
</style>
