(function ($) {
    "use strict";

    function twitterVideoPlayer($root) {
        const element = $root.get(0);
        const video_element = $root.find("[data-video]").get(0);
        const video_preview = $root.find(".video-preview");
        const video_start_btn = $root.find(".video-start-btn");
        const video_control_btn = $root.find(".video-control-btn");
        const video_control_play = $root.find(".video-control-play");
        const video_control_pause = $root.find(".video-control-pause");
        const video_voice_btn = $root.find(".video-voice-btn");
        const video_voice_on = $root.find(".video-voice-on");
        const video_voice_off = $root.find(".video-voice-off");
        const full_screen_btn = $root.find(".full-screen-btn");
        const full_screen_open = $root.find(".full-screen-open");
        const full_screen_exit = $root.find(".full-screen-exit");
        const video_slider = $root.find(".video-slider-container");
        const video_slider_rail = $root.find(".video-slider-rail");
        const video_count_time = $root.find(".video-count-time");
        const video_count_fulltime = $root.find(".video-count-fulltime");
        const video_loading = $root.find(".video-loading");
        const video_reset = $root.find(".video-reset");
        const video_reset_btn = $root.find(".video-reset-btn");
        const video_contextMenu = $root.find(".video-contextMenu");

        const vid = video_element;

        function play() {
            if (vid && vid.paused) {
                vid.play();
                video_control_play.hide();
                video_control_pause.show();
            }
        }

        function pause() {
            if (vid && !vid.paused) {
                vid.pause();
                video_control_pause.hide();
                video_control_play.show();
            }
        }

        function updateLoadingState() {
            vid.readyState >= 3 ? video_loading.hide() : video_loading.show();
        }

        function voiceOn() {
            vid.muted = true;
            video_voice_on.hide();
            video_voice_off.show();
        }

        function voiceOff() {
            vid.muted = false;
            video_voice_on.show();
            video_voice_off.hide();
        }

        function toggleFullscreen() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                full_screen_open.show();
                full_screen_exit.hide();
            } else {
                element.requestFullscreen();
                full_screen_open.hide();
                full_screen_exit.show();
            }
        }

        function updatePlayer() {
            const percentage = (vid.currentTime / vid.duration) * 100;
            video_slider_rail.css({ width: `${percentage}%` });
            video_count_time.text(getFormattedTime());
            video_count_fulltime.text(getFormattedFullTime());
            if (vid.currentTime < vid.duration) video_reset.hide();
        }

        function getFormattedTime() {
            const seconds = Math.round(vid.currentTime);
            return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
        }

        function getFormattedFullTime() {
            const totalSeconds = Math.round(vid.duration);
            return `${Math.floor(totalSeconds / 60).toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`;
        }

        function skip(event) {
            const pageX = event.type.includes('touch') ? event.touches[0].pageX : event.pageX;
            const mouseX = pageX - video_slider.offset().left;
            vid.currentTime = (mouseX / video_slider.outerWidth()) * vid.duration;
            updatePlayer();
        }

        // Event Handlers
        video_start_btn.on('click', () => {
            video_preview.hide();
            play();
        });

        $(vid)
            .on('progress', updateLoadingState)
            .on('timeupdate', updatePlayer)
            .on('ended', () => video_reset.show())
            .on('play', () => {
                video_control_play.hide();
                video_control_pause.show();
            })
            .on('pause', () => {
                video_control_pause.hide();
                video_control_play.show();
            })
            .on('contextmenu', (e) => {
                e.preventDefault();
                video_contextMenu.show().css({ top: e.pageY, left: e.pageX });
            });

        video_control_btn.on('click', () => vid.paused ? play() : pause());
        video_voice_btn.on('click', () => vid.muted ? voiceOff() : voiceOn());
        full_screen_btn.on('click', toggleFullscreen);
        video_reset_btn.on('click', () => {
            vid.currentTime = 0;
            play();
            video_reset.hide();
        });

        video_slider.on('mousedown touchstart', (e) => {
            e.preventDefault();
            const moveHandler = e => {
                e.preventDefault();
                skip(e);
            };
            $(document)
                .on('mousemove touchmove', moveHandler)
                .one('mouseup touchend', () => $(document).off('mousemove touchmove', moveHandler));
        });

        $(window).on('click', () => video_contextMenu.fadeOut("fast"));
    }

    $.fn.twitterVideoPlayer = function () {
        return this.each(function () {
            twitterVideoPlayer($(this));
        });
    };
})(jQuery);

$(".video").twitterVideoPlayer();
