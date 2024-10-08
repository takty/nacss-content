/**
 * Iframe Aspect
 *
 * @author Takuto Yanagida
 * @version 2024-10-06
 */

function apply(fs) {
	for (const f of fs) {
		if (!f.style.aspectRatio) {
			setAspectRatio(f);
		}
	}
	observe(fs);
}

function observe(fs) {
	if (!fs.length) return;
	const mo = new MutationObserver(rs => {
		for (const r of rs) setAspectRatio(r.target);
	});
	for (const f of fs) {
		mo.observe(f, { attributes: true });
	}
}

function setAspectRatio(f) {
	const [w, h] = extractIframeSize(f);
	if (w && h) {
		f.style.aspectRatio = `${w} / ${h}`;
		f.style.height      = 'auto';
	}
}

function extractIframeSize(f) {
	const uW = f.width.replace(/[0-9]/g, '');
	const uH = f.height.replace(/[0-9]/g, '');
	if (uW !== uH) return [0, 0];
	let w = parseInt(f.width);
	let h = parseInt(f.height);
	if (w && h) return [w, h];

	const sW = f.style.width;
	const sH = f.style.height;
	if (!sW.endsWith('px') || !sH.endsWith('px')) return [0, 0];
	w = parseInt(sW);
	h = parseInt(sH);
	if (w && h) return [w, h];
	return [0, 0];
}
