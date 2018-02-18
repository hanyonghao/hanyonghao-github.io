/*!
 * scale.js
 * 用于处理等比缩放，原理是利用rem单位的相对性
 * 标准宽度(750px，即UI稿宽度)时，html元素font-size为100px
 */
import { isIOS } from '@/common/js/env';


(function(global) {
	let doc = global.document;
	let ua = global.navigator.userAgent;
	let docElt = doc.documentElement;

	// Android不支持1px以下的线，设置默认dpr为1
	let dpr = 1;
	// iOS支持0.5px
	if (isIOS) {
		// iPhone6P的dpr是3，此时细线出不来，所以限制最大dpr为2
		dpr = Math.min(Math.round(global.devicePixelRatio), 2);
	}
	docElt.classList.add('g-dpr-' + dpr);

	// PC平台
	if (/\b(Windows\sNT|Macintosh|Linux)\b/.test(ua) && !/mobile|android/i.test(ua)) {
		docElt.classList.add('g-plat-pc');
		return;
	}

	// 基于rem的等比缩放
	function resetFontSize() {
		docElt.style.fontSize = docElt.clientWidth / 750 * 100 + 'px';
		return resetFontSize;
	}

	global.addEventListener('resize', resetFontSize(), false);
})(window);