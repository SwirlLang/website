<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '../app.scss';
	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<header class="flex">
	<nav class="items-baseline">
		<a href="/" class:current={page.url.pathname === '/'} class="swirl relative">
			<img
				src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
				alt="swirl logo"
				class="h-8 w-8 rounded-xl absolute -left-12 top-1/2 -translate-y-1/2" />
			<h1>Swirl</h1>
		</a>
		<a href="/download/latest" class:current={page.url.pathname.startsWith('/download')}>
			Download
		</a>
		<a href="/docs" class:current={page.url.pathname.startsWith('/docs')}> Docs </a>
	</nav>
</header>
{@render children()}
<footer class="flex h-14">
	<img
		src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
		alt="swirl logo"
		class="h-8 w-8 rounded-xl" />
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
			gap: 0.75rem;
			a {
				&:hover {
					color: #bdbdbd;
					&.swirl {
						color: #e7c6ff;
					}
				}
				&.swirl {
					padding-inline: 0;
				}
				position: relative;
				padding: 1rem 1rem;
				color: #fff;
				text-decoration: none;

				&::after {
					content: '';
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 13px;
					background: #e7c6ff;
					clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
				}

				&.current::after {
					view-transition-name: indicator;
					height: 8px;
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
		gap: 0.5rem;
	}
</style>
