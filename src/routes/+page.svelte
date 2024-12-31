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
	<button><a href="https://github.com/swirllang/swirl" target="_blank">Download</a></button>
</main>

<style lang="scss">
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
        mask: linear-gradient(transparent 0%, #000000c4 100%);
        z-index: -1;
        animation: dot-grid 3s infinite linear;
	}
	.circle {
		width: 80vw;
		height: 80vw;
		border-radius: 50%;
		background: linear-gradient(to bottom, rgba(27, 27, 27, 1) 0%, rgba(18, 0, 138, 0.6) 100%);
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -2;
	}
	@keyframes rotate_gradient {
		100% {
			transform: translate(-50%, -50%) rotate(360deg)
		}
	}
	.gradient-bg {
		width: 70vw;
		height: 70vw;
		background: linear-gradient(45deg, #442576, #12008a 27% 45%, #7e0e7c 72%, #b442b2 92%);
		position: absolute;
		border-radius: 50%;
		top: 100%;
		left: 50%;
		filter: blur(130px);
		transform: translate(-50%, -50%);
		animation: rotate_gradient 10s infinite linear;
		z-index: -3;
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
