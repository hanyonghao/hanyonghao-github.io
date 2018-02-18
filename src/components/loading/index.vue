<template>
	<div class="c-loading">
		<svg viewBox="25 25 50 50" class="circular">
			<circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
		</svg>
	</div>
</template>

<style lang="scss" scoped>
.c-loading {
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
	background: rgba(255, 255, 255, 0.9);
	.circular {
		position: absolute;
		top: 50%;
		left: 50%;
		height: 42px; /*no*/
		width: 42px; /*no*/
		margin: -21px 0 0 -21px; /*no*/
		animation: loading-rotate 2s linear infinite;
		.path {
			animation: loading-dash 1.5s ease-in-out infinite;
			stroke-dasharray: 90, 150;
			stroke-dashoffset: 0;
			stroke-width: 2;
			stroke: #409eff;
			stroke-linecap: round;
		}
	}
	@keyframes loading-rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes loading-dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -40px; /*no*/
		}
		100% {
			stroke-dasharray:90, 150;
			stroke-dashoffset: -120px; /*no*/
		}
	}
}
</style>

<script>
export default {
};
</script>