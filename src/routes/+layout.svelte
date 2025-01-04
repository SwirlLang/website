<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

<header class="flex h-16 fixed">
	<img src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png" alt="swirl logo" class="rounded-xl h-10 w-10">
	<h1>Swirl</h1>

	<!-- <nav>
		<a href="/about">Download</a>
		<a href="/docs">Docs</a>
		<a href="/contact">Contact</a>
	</nav> -->
</header>
{@render children()}


<style lang="scss">
header {
	width: 100%;
	padding: 0 1rem;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	z-index: 3;
	background: linear-gradient(90deg, #1b1b1b 0%, #1b1b1bb8 50%, #1b1b1b 100%);
	backdrop-filter: blur(10px);
	h1 {
		font-size: 1.3rem;
		font-weight: 700;
	}
}
</style>