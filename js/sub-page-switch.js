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
		sub_page_frame.innerHTML = this.responseText;
	}
	xreq.open('GET', 'css-color-grid.html', true);
	xreq.send();
}