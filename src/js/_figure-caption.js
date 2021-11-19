/**
 *
 * Figure Caption
 *
 * @author Takuto Yanagida
 * @version 2021-11-19
 *
 */


// Wrap figure captions with spans for Firefox
function initialize(figs) {
	const ua = window.navigator.userAgent.toLowerCase();
	if (ua.includes('firefox')) {
		for (const fig of figs) {
			fig.style.width = '';

			const fcs = fig.getElementsByTagName('figcaption');
			const fc  = fcs.length ? fcs[0] : null;
			if (fc) {
				fc.innerHTML = `<span>${fc.innerHTML}</span>`;
			}
		}
	}
}
