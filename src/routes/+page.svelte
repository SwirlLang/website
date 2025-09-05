<main class="flex h-screen flex-col items-center justify-center">
	<div class="gradient-bg"></div>
	<div class="flex flex-col items-center justify-center">
		<h2 class="better">
			Build <span>better</span>
		</h2>
		<h2 class="faster">
			Build <span>faster</span>
		</h2>
	</div>
	<p>A modern, beginner-friendly language that combines power, performance, and simplicity.</p>
	<div class="flex gap-4">
		<a href="/download" class="btn download">Download</a>
		<a href="/docs/installation" target="_blank" class="btn docs">Get started</a>
	</div>
</main>

<style lang="scss">
	:root {
		--gradient-angle: 45deg;
		--clr-1: #12008a;
		--clr-2: #7e0e7c;
		--clr-3: #b442b2;
	}

	@property --gradient-angle {
		syntax: '<angle>';
		initial-value: 85deg;
		inherits: false;
	}
	@keyframes rotate {
		from {
			--gradient-angle: 0deg;
		}
		to {
			--gradient-angle: 360deg;
		}
	}
	.gradient-bg {
		width: 65vw;
		height: 60vw;
		background: conic-gradient(
			from var(--gradient-angle),
			var(--clr-1) 10%,
			var(--clr-2),
			var(--clr-3),
			var(--clr-2),
			var(--clr-1) 90%
		);
		position: absolute;
		border-radius: 50%;
		top: 55%;
		left: 50%;
		opacity: 35%;
		filter: blur(100px);
		transform: translate(-50%, -50%);
		animation: rotate 10s infinite linear;
		z-index: -3;
		@media screen and (width < 55rem) {
			width: 70vw;
			height: 75vw;
			opacity: 65%;
		}

		@media screen and (width < 30rem) {
			width: 90vw;
			height: 120vw;
			opacity: 70%;
		}
	}
	h2 {
		font-size: clamp(3rem, 10vw, 6rem);
		font-family: 'Bodoni Moda', serif;
		line-height: 1.2;
		font-optical-sizing: none;
		width: min-content;
		text-align: center;
		span {
			color: #d8a4ff;
			font-size: clamp(5rem, 10vw, 8rem);
			font-style: italic;
			font-weight: 700;
		}
		@media screen and (width > 768px) {
			width: 100%;
			&.better {
				transform: translateX(-20%);
			}
			&.faster {
				transform: translateX(20%);
			}
		}
	}
	p {
		font-size: 1.5rem;
		font-size: clamp(1.1rem, 3vw, 1.5rem);
		margin-top: 2rem;
		text-align: center;
		width: 35%;
		@media screen and (width < 768px) {
			width: 70%;
		}
	}
	.btn {
		background-color: #d8a4ff;
		padding: 0.3rem 1.2rem;
		border-radius: 10rem;
		margin-top: 2rem;
		transition: 0.3s;
		&.download {
			border: 3px solid #646464;
			color: #1b1b1b;
			&:hover {
				background-color: #e7c6ff;
			}
		}
		&.docs {
			border: 3px solid #646464;
			background-color: #1b1b1b;
			&:hover {
				background-color: #2b2b2b;
			}
		}
	}
</style>
