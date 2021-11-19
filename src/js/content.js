/**
 *
 * Content
 *
 * @author Takuto Yanagida
 * @version 2021-11-19
 *
 */


window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	(function () {
		// @include _image-alt.js
		NS.contentImageAlt = initialize;
	})();

	(function () {
		// @include _figure-caption.js
		NS.contentFigureCaption = initialize;
	})();

	(function () {
		// @include _iframe-aspect.js
		NS.contentIframeAspect = initialize;
	})();

	(function () {
		// @include _underline.js
		NS.contentUnderline = initialize;
	})();

	// @include _style-class.js

})(window['NACSS']);
