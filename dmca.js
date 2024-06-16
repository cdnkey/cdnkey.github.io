videoPlayer.addEventListener('canplaythrough', (event) => {
	let DmcaBanner = document.querySelector('.dmca-banner');
	if (DmcaBanner) {
		DmcaBanner.remove();
	}

	videoPlayer.style.filter = 'none';
});
