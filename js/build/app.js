document.getElementById('rules-link').onclick = function() {
	picoModal({
		content: document.getElementById('rules').innerHTML,
		closeButton: true,
		overlayStyles: {
			backgroundColor: '#fff',
			opacity: 0.8
	      }
	});
}