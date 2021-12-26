/**
 *
 * Underline
 *
 * @author Takuto Yanagida
 * @version 2021-12-26
 *
 */


function apply(spans, opts = {}) {
	opts = Object.assign({
		styleList: ':ncUnderline',
	}, opts);

	for (const span of spans) {
		setStyle(span, opts);
	}
}

function setStyle(t, opts) {
	const type = t.style.textDecorationLine;
	if (type === 'underline') {
		const re = new RegExp('text-decoration\\s*:\\s*' + type + '\\s*;?', 'gi');
		if (t.getAttribute('style').match(re)) {
			t.removeAttribute('style');
		} else {
			t.style.textDecorationLine = '';
		}
		setClass(t, opts.styleList);
	}
}
