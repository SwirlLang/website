<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import 'iconify-icon';
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

<header>
	<nav class="flex justify-between">
		<div>
			<a href="/" class="swirl flex items-center gap-2">
				<img
					src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
					alt="swirl logo"
					class="h-8 w-8 rounded-xl" />
				Swirl
			</a>
		</div>
		<div class="flex gap-4">
			<a href="/download/latest" class:current={page.url.pathname.startsWith('/download')}
				>Download</a>
			<a href="/docs" class:current={page.url.pathname.startsWith('/docs')}>Docs</a>
			<a href="/blog" class:current={page.url.pathname.startsWith('/blog')}>Blog</a>
		</div>
		<div class="ps-16">
			<a href="https://github.com/swirllang/swirl" aria-label="GitHub" class="flex" target="_blank">
				<iconify-icon icon="uil:github" width="24" height="24"></iconify-icon>
			</a>
		</div>
	</nav>
</header>

{@render children()}

<footer class="flex h-14">
	<img
		src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
		alt="swirl logo"
		class="h-8 w-8 rounded-xl" />
	<p>© Swirl Lang</p>
</footer>

<style lang="scss">
	header {
		width: 100vw;
		position: fixed;
		padding-inline: 1rem;
		z-index: 3;
		background: linear-gradient(90deg, #1b1b1b 0%, #272727c9 50%, #1b1b1b 100%);
		backdrop-filter: blur(7px);
		top: 0;
		nav {
			div {
				a {
					color: white;
					font-weight: 500;
					padding: .7rem 0;
					position: relative;
					display: flex;
					align-items: center;
					font-size: 1.1rem;
					&.swirl {
						font-weight: 700;
						font-size: 1.25rem;
					}
					&:hover {
						color: #bdbdbd;
						&.swirl {
							color: #e7c6ff;
							& img {
								opacity: 0.9;
							}
						}
					}
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
		}
	}
	footer {
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
</style>
