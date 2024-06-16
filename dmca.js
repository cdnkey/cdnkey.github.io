videoPlayer.addEventListener('canplaythrough', (event) => {
let DmcaBanner = document.querySelector('.dmca-banner');
	if (DmcaBanner) {
                DmcaBanner.remove();
            }
            videoPlayer.style.filter = 'none';
            videoPlayer.style.transition = '300ms all ease';
        });
