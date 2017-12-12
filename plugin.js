( function() {
	'use strict';

	CKEDITOR.plugins.add( 'linkballoon', {
		requires: 'balloontoolbar,link,openlink',

		afterInit: function( editor ) {
			editor.ui.addButton( 'OpenLink', {
				command: 'openLink',
				toolbar: 'links,50',
				label: editor.lang.openlink.menu
			} );

			editor.balloonToolbars.create( {
				buttons: 'OpenLink,Link,Unlink',
				cssSelector: 'a'
			} );
		}
	} );
} )();