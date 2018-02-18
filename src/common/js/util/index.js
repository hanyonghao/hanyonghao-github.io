/**
 * 设置页面标题
 * @method setTitle
 * @param {String} title 标题
 */
export function setTitle(title) {
	if (document.title === title) { return; }

	document.title = title;

}

/**
 * 格式化日期
 * @method formatDate
 * @param {Date} date 日期
 * @param {String} formation 日期格式
 * @return {String} 格式化后的日期字符串
 */
export function formatDate(date, formation) {
	let values = {
		Y: date.getFullYear(),
		M: date.getMonth() + 1,
		D: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds()
	};

	return formation.replace(/Y+|M+|D+|h+|m+|s+/g, function(match) {
		let result = values[match[0]];
		if (match.length > 1 && result.toString().length !== match.length) {
			result = ((new Array(match.length)).join('0') + result).slice(-match.length);
		}
		return result;
	});
}

/**
 * 加载脚本文件
 * @method getScript
 * @param {String} src 文件URL
 * @param {Object} [options] 其他选项
 *   @param {String} [options.charset] 编码
 * @return {Object} 加载脚本文件的promise
 */
export function getScript(src, options) {
	return new Promise((resolve) => {
		let script = document.createElement('script');
		let head = document.getElementsByTagName('head')[0];

		if (options && options.charset) { script.charset = options.charset; }
		script.async = true;
		script.onload = function() {
			// 移除script节点
			script.onload = null;
			head.removeChild(script);
			script = null;
			resolve();
		};
		script.src = src;

		if (head.firstChild) {
			head.insertBefore(script, head.firstChild);
		} else {
			head.appendChild(script);
		}
	});
}