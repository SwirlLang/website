<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

<header class="flex h-14">
	<img
		src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
		alt="swirl logo"
		class="h-8 w-8 rounded-xl"
	/>
	<a href="/" class="hover:text-[#e7c6ff]">
		<h1>Swirl</h1>
	</a>

	<nav>
		<a href="/download">Download</a>
		<a href="/docs">Docs</a>
	</nav>
</header>
{@render children()}
<footer class="flex h-14">
	<img
		src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
		alt="swirl logo"
		class="h-8 w-8 rounded-xl"
	/>
	<p>© 2025 Swirl</p>
</footer>

<style lang="scss">
	header {
		width: 100vw;
		position: fixed;
		margin-inline: auto;
		padding: 0 1rem;
		top: 0px;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		z-index: 3;
		background: linear-gradient(90deg, #1b1b1b 0%, #272727c9 50%, #1b1b1b 100%);
		backdrop-filter: blur(10px);
		nav {
			display: flex;
			gap: .75rem;
			a {
				&:hover {
					color: #bdbdbd;
				}
			}
		}
		h1 {
			font-size: 1.2rem;
			font-weight: 700;
		}
	}
	footer {
		justify-content: center;
		align-items: center;
		gap: .5rem;
	}
</style>
