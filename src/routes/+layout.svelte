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

	let navbar: HTMLElement;
	let dropdownBtn: HTMLButtonElement;
	function toggleNavbar() {
		navbar.classList.toggle('open');
		dropdownBtn.classList.toggle('open');
	}
</script>

<header>
	<div class="nav-extra flex justify-between">
		<div>
			<a href="/" class="swirl flex items-center gap-2">
				<img
					src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
					alt="swirl logo"
					class="h-8 w-8 rounded-xl" />
				Swirl
			</a>
		</div>
		<div class="">
			<a href="https://github.com/swirllang/swirl" aria-label="GitHub" class="flex" target="_blank">
				<iconify-icon icon="uil:github" width="24" height="24"></iconify-icon>
			</a>
		</div>
	</div>
	<nav class="navbar flex items-center gap-4" bind:this={navbar}>
		<a href="/download/latest" class:current={page.url.pathname.startsWith('/download')}
			>Download</a>
		<a href="/docs" class:current={page.url.pathname.startsWith('/docs')}>Docs</a>
		<a href="/blog" class:current={page.url.pathname.startsWith('/blog')}>Blog</a>
	</nav>
	<button
		class="dropdown"
		aria-label="navbar dropdown button"
		onclick={toggleNavbar}
		bind:this={dropdownBtn}>
		<iconify-icon icon="tabler:chevron-compact-down" width="24" height="24" class=""></iconify-icon>
	</button>
</header>

{@render children()}

<footer class="flex h-14">
	<a href="https://github.com/SwirlLang" class="flex items-center gap-2 hover:text-gray-300">
		<img
			src="https://raw.githubusercontent.com/SwirlLang/branding/main/logos/logo.png"
			alt="swirl logo"
			class="h-8 w-8 rounded-xl" />
		<p>© Swirl Lang</p>
	</a>
</footer>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		.navbar {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0%);
			height: 3.5rem;
			top: 0;
			backdrop-filter: blur(7px);
			view-transition-name: navbar;
			@media screen and (width < 40rem) {
				top: 0%;
				background-color: #4f4f4fc9;
				padding: 0 1.5rem;
				border-radius: 0 0 1rem 1rem;
				height: 3.5rem;
				z-index: -1;
				opacity: 0%;
			}
			transition:
				0.3s transform,
				0.5s opacity;
			&:global(.open) {
				transform: translate(-50%, 100%);
				opacity: 100%;
			}
		}
		.dropdown {
			display: none;
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			background-color: #3f3f3f;
			padding-inline: 1rem;
			border-radius: 0 0 0.5rem 0.5rem;
			cursor: pointer;
			transition: 0.3s;
			&:global(.open) {
				transform: translate(-50%, 230%);
			}
			@media screen and (width < 40rem) {
				display: flex;
			}
		}
		.nav-extra {
			width: 100vw;
			background: linear-gradient(90deg, #1b1b1b 0%, #272727c9 50%, #1b1b1b 100%);
			backdrop-filter: blur(7px);
			padding-inline: 1rem;
			height: 3.5rem;
		}
		a {
			color: white;
			font-weight: 500;
			height: 100%;
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
	footer {
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
</style>
