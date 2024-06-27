function onVideoCanPlayThrough() {
            const dmcaBanner = document.querySelector('.dmca-banner');
            if (dmcaBanner) {
                dmcaBanner.remove();
            }
            videoPlayer.style.filter = 'none';
        }

        videoPlayer.addEventListener('canplaythrough', onVideoCanPlayThrough);

        window.onload = combinePartsAndPlay;
