// sub-page-switch.js

var sub_page_frame = document.getElementById('sub-page-frame');

function onTopNavColorArraysLinkClick(link_elem) {
	var  xreq = undefined;
	if(window.XMLHttpRequest) {
		xreq = new XMLHttpRequest();
	} else {
		xreq = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xreq.onreadystatechange = function() {
		sub_page_frame.innerHTML = this.responseText;
		// Re-calls Prism.highlightAll() in order for the code blocks to 
		// have syntax highlighting when they are loaded. This is needed since
		// the http request is serving the css-color-arrays-page after the DOM 
		// has loaded. [See: Issue #1]
		reactivatePrismHighlighting();
	} 
	xreq.open('GET', 'css-color-arrays.html', true);
	xreq.send();

}

function onTopNavColorGridLinkClick(link_elem) {
	var xreq = undefined; 
	if(window.XMLHttpRequest) {
		xreq = new XMLHttpRequest();
	} else {
		xreq = new ActiveXObject('Microsoft.XMLHTTP');
	}	
	xreq.onreadystatechange = function() {
		sub_page_frame.innerHTML =  this.responseText;

		// Populates the header and paragraph tags of each color section
		// with the colors name, hex and rgb values.
		populateColorSectionFields();
	}
	xreq.open('GET', 'css-color-grid.html', true);
	xreq.send();
}