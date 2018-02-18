let ua = window.navigator.userAgent;

/**
 * 是否在微信内
 * @property isInWeixin
 * @type {Boolean}
 */
export let isInWeixin = /\bMicroMessenger\b/.test(ua);

/**
 * 是否在QQ或iPad QQ内
 * @property isInQQ
 * @type {Boolean}
 */
export let isInQQ = /\b(IPad)?QQ\b/.test(ua);

/**
 * 是否在微博内
 * @property isInWeibo
 * @type {Boolean}
 */
export let isInWeibo = /\bWeibo\b/.test(ua);

/**
 * 是否在iOS设备下
 * @property isIOS
 * @type {Boolean}
 */
export let isIOS = /\b(?:iPad|iPod|iPhone)\b/.test(ua) &&
	/\bOS(?:\s([\d_.]+))?\slike\sMac\sOS\sX\b/.test(ua);

/**
 * iOS系统版本
 * @property iOSVer
 * @type {String}
 */
export let iOSVer = '';
if (isIOS) {
	iOSVer = RegExp.$1.replace(/_/g, '.');
}

/**
 * 是否在Android设备下
 * @property isAndroid
 * @type {Boolean}
 */
export let isAndroid = /\b(?:Android|Adr|YunOS)\b/.test(ua);