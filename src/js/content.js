/**
 *
 * Content
 *
 * @author Takuto Yanagida
 * @version 2021-12-07
 *
 */


'use strict';

window['NACSS'] = window['NACSS'] || {};


(function (NS) {

	{
		// @include _image-alt.js
		NS.contentImageAlt = initialize;
	}

	{
		// @include _figure-caption.js
		NS.contentFigureCaption = initialize;
	}

	{
		// @include _iframe-aspect.js
		NS.contentIframeAspect = initialize;
	}

	{
		// @include _underline.js
		NS.contentUnderline = initialize;
	}

	// @include _style-class.js

})(window['NACSS']);
