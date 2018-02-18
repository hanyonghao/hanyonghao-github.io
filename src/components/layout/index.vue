<template>
	<div class="c-layout">

		<template v-if="layout">
			<component :is="layout">
				<transition name="g-fade">
					<router-view></router-view>
				</transition>
			</component>
		</template>

		<template v-else>
			<loading class="g-full-screen"/>
		</template>
	</div>
</template>

<style lang="scss" src="@/common/scss/reset/reset.scss"></style>
<style lang="scss" src="@/common/scss/preset/all.scss"></style>
<style lang="scss" scoped>
</style>

<script>
import '@/common/js/scale';
import PCLayout from '@/components/layout/pc';
import MobileLayout from '@/components/layout/mobile';

export default {
	data() {
		return {
			layout: null
		};
	},

	components: {
		'pc-layout': PCLayout,
		'mobile-layout': MobileLayout
	},

	methods: {
		resizeHandler() {
			let width = document.documentElement.clientWidth;
			this.layout = width < 900 ? 'mobile-layout' : 'pc-layout';
			return this.resizeHandler;
		}
	},

	created() {
		window.addEventListener('resize', this.resizeHandler(), false);
	}
};
</script>