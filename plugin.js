( function() {
	'use strict';

	CKEDITOR.plugins.add( 'linkballoon', {
		requires: 'balloontoolbar,link',
		afterInit: function( editor ) {
			editor.balloonToolbars.create( {
				buttons: 'Link,Unlink',
				cssSelector: 'a'
			} );
		}
	} );
} )();