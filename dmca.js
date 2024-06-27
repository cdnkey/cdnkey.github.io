function onVideoCanPlayThrough() {
            const dmcaBanner = document.querySelector('.dmca-banner');
            if (dmcaBanner) {
                dmcaBanner.remove();
            }
            videoPlayer.style.filter = 'none';
            document.body.pointerEvents = 'auto';
        }

        videoPlayer.addEventListener('canplaythrough', onVideoCanPlayThrough);

        window.onload = combinePartsAndPlay;
