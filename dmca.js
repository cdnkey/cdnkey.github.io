videoElementLoad = document.querySelector('.video');
videoElementLoad.addEventListener('canplaythrough', function() {
	let DmcaBanner = document.querySelector('.dmca-banner');
	DmcaBanner.remove();
	let videoFilter = document.querySelector('.video');
	videoFilter.style.filter = 'none';
	videoFilter.style.transition = '300ms all ease';
});
