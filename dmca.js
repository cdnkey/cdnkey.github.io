function onVideoCanPlayThrough() {
            const dmcaBanner = document.querySelector('.dmca-banner');
            if (dmcaBanner) {
                dmcaBanner.remove();
                document.body..style.pointerEvents = 'auto';
            }
            videoPlayer.style.filter = 'none';
        }

        videoPlayer.addEventListener('canplaythrough', onVideoCanPlayThrough);

        window.onload = combinePartsAndPlay;
