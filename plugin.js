( function() {
	'use strict';

	// Returns the element of active (currently focused) link.
	// It has also support for linked image2 instance.
	// @return {CKEDITOR.dom.element}
	function getActiveLink( editor ) {
		var anchor = CKEDITOR.plugins.link.getSelectedLink( editor ),
			// We need to do some special checking against widgets availability.
			activeWidget = editor.widgets && editor.widgets.focused;

		// If default way of getting links didn't return anything useful
		if ( !anchor && activeWidget && activeWidget.name == 'image' && activeWidget.parts.link ) {
			// Since CKEditor 4.4.0 image widgets may be linked.
			anchor = activeWidget.parts.link;
		}

		return anchor;
	}

	CKEDITOR.plugins.add( 'linkballoon', {
		requires: 'balloontoolbar,link',
		lang: 'en',
		icons: 'linkpopup',
		hidpi: true,
		afterInit: function( editor ) {
			var lang = editor.lang.linkballoon;

			editor.ui.addButton( 'LinkPopup', {
				command: 'openLink',
				toolbar: 'links,50',
				label: lang.buttonLabel
			} );

			// Register openLink command.
			editor.addCommand( 'openLink', {
				exec: function( editor ) {
					var anchor = getActiveLink( editor ),
						href;

					if ( anchor ) {
						href = anchor.getAttribute( 'href' );
					}

					if ( href ) {
						window.open( href, '_blank' );
					}
				}
			} );

			editor.balloonToolbars.create( {
				buttons: 'LinkPopup,Link,Unlink',
				cssSelector: 'a'
			} );
		}
	} );
} )();