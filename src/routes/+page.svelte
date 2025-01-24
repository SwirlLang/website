<main class="flex h-screen flex-col items-center justify-center">
	<div class="dot-grid"></div>
	<div class="circle"></div>
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
		<a href="https://github.com/swirllang/swirl" target="_blank" class="btn docs">Get started</a>
	</div>
</main>

<style lang="scss">
	:root {
		--gradient-angle: 45deg;
		--clr-1: #12008a;
		--clr-2: #7e0e7c;
		--clr-3: #b442b2;
	}
	@keyframes dot-grid {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 40px 40px;
		}
	}
	.dot-grid {
		background-image: radial-gradient(white 1px, transparent 0);
		background-size: 40px 40px;
		width: 80vw;
		height: 80vw;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		mask: linear-gradient(transparent 0%, #000000c4 50%, transparent 80%);
		z-index: -1;
		animation: dot-grid 3s infinite linear;
	}
	.circle {
		width: 80vw;
		height: 80vw;
		border-radius: 50%;
		background: linear-gradient(
			to bottom,
			rgba(27, 27, 27, 1) 0%,
			rgb(14, 0, 85) 35%,
			rgba(14, 0, 102, 1) 50%,
			rgb(14, 0, 85) 60%,
			rgba(27, 27, 27, 1) 80%
		);
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -2;
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
		top: 85%;
		left: 50%;
		filter: blur(100px);
		transform: translate(-50%, -50%);
		animation: rotate 10s infinite linear;
		z-index: -3;
	}
	h2 {
		font-size: 6rem;
		font-family: 'Bodoni Moda', serif;
		line-height: 1.2;
		font-optical-sizing: none;
		span {
			color: #fddbd5;
			font-size: 8rem;
			font-style: italic;
			font-weight: 700;
		}
		&.better {
			transform: translateX(-20%);
		}
		&.faster {
			transform: translateX(20%);
		}
	}
	p {
		font-size: 1.5rem;
		margin-top: 2rem;
		text-align: center;
		width: 35%;
	}
	.btn {
		background-color: #fddbd5;
		padding: 0.3rem 1.2rem;
		border-radius: 10rem;
		margin-top: 2rem;
		transition: 0.3s;
		&.download {
			border: 3px solid #646464;
			color: #1b1b1b;
			&:hover {
				background-color: #cab0ac;
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
