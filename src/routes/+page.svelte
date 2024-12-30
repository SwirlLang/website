<main class="flex h-screen flex-col items-center justify-center">
	<div class="dot-grid"></div>
	<div class="circle"></div>
	<div class="flex flex-col items-center justify-center">
		<h2 class="better">
			Build <span>better</span>
		</h2>
		<h2 class="faster">
			Build <span>faster</span>
		</h2>
	</div>
	<p>A modern, beginner-friendly language that combines power, performance, and simplicity.</p>
	<button><a href="https://github.com/swirllang/swirl" target="_blank">Download</a></button>
</main>

<style lang="scss">
	.dot-grid {
		background-image: radial-gradient(white 1px, transparent 0);
		background-size: 40px 40px;
        width: 70rem;
        height: 70rem;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        mask: linear-gradient(transparent 0%, #000000c4 100%);
        z-index: -1;
	}
	div.circle {
		width: 70rem;
		height: 70rem;
		border-radius: 50%;
		background: linear-gradient(to bottom, rgba(27, 27, 27, 1) 0%, rgba(18, 0, 138, 0.6) 100%);
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -2;
		box-shadow: 0px 0px 100px 70px rgba(164, 16, 218, 0.15);
	}
	h2 {
		font-size: 6rem;
		font-family: 'Bodoni Moda', serif;
		line-height: 1.2;
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
	button {
		background: radial-gradient(circle, rgba(49, 49, 49, 1) 0%, rgba(27, 27, 27, 1) 100%);
		outline: 2px solid #646464;
		padding: 0.2rem 1rem;
		border-radius: 10rem;
		margin-top: 2rem;
	}
</style>
