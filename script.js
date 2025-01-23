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

		const handleFullscreenChange = () => {
			const isFullscreen = document.fullscreenElement || document.mozFullScreenElement;
			full_screen_open.toggle(!isFullscreen);
			full_screen_exit.toggle(isFullscreen);
		};

		const toggleFullscreen = () => {
			const isFullscreen = document.fullscreenElement || document.mozFullScreenElement;

			if (isFullscreen) {
				if (document.exitFullscreen) document.exitFullscreen();
				else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
				else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
			} else {
				if (element.requestFullscreen) element.requestFullscreen();
				else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
				else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
			}
		};

		const play = () => {
			if (vid.paused) {
				vid.play();
				video_control_play.hide();
				video_control_pause.show();
			}
		};

		const pause = () => {
			if (!vid.paused) {
				vid.pause();
				video_control_pause.hide();
				video_control_play.show();
			}
		};

		const updateLoadingState = () => {
			video_loading.toggle(vid.readyState < 3);
			if (vid.readyState < 3) pause();
		};

		const voiceOn = () => {
			vid.muted = true;
			video_voice_on.hide();
			video_voice_off.show();
		};

		const voiceOff = () => {
			vid.muted = false;
			video_voice_on.show();
			video_voice_off.hide();
		};

		const updatePlayer = () => {
			const percentage = (vid.currentTime / vid.duration) * 100;
			video_slider_rail.css({
				width: percentage + "%"
			});
			video_count_time.text(getFormattedTime(vid.currentTime));
			video_count_fulltime.text(getFormattedFullTime(vid.duration));
			video_reset.css("display", vid.currentTime < vid.duration ? "none": "flex");
		};

		const getFormattedTime = (seconds) => {
			const date = new Date(seconds * 1000);
			return date.toISOString().substr(14, 5);
		};

		const getFormattedFullTime = (duration) => {
			const date = new Date(duration * 1000);
			return date.toISOString().substr(14, 5);
		};

		const skip = (event) => {
			const pageX = event.type.includes('touch') ? event.touches[0].pageX: event.pageX;
			const mouseX = pageX - video_slider.offset().left;
			vid.currentTime = (mouseX / video_slider.outerWidth()) * vid.duration;
			updatePlayer();
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		document.addEventListener('mozfullscreenchange', handleFullscreenChange);

		video_start_btn.click(() => {
			video_preview.hide();
			play();
		});

		$(vid).on("progress", updateLoadingState);

		video_control_btn.click(() => vid.paused ? play(): pause());

		video_voice_btn.click(() => vid.muted ? voiceOff(): voiceOn());

		full_screen_btn.click(toggleFullscreen);

		$(vid).on("timeupdate", updatePlayer);

		video_reset_btn.click(() => {
			vid.currentTime = 0;
			play();
		});

		video_slider.on("mousedown touchstart", (event) => {
			event.preventDefault();
			const moveHandler = (e) => skip(e);
			$(document)
			.on("mousemove touchmove", moveHandler)
			.one("mouseup touchend", () => $(document).off("mousemove touchmove", moveHandler));
		});

		$(vid).on("contextmenu", (event) => {
			event.preventDefault();
			video_contextMenu.css({
				top: event.pageY, left: event.pageX
			}).show();
		});

		$(window).click(() => video_contextMenu.fadeOut("fast"));
		$(vid).on("play", () => video_control_play.hide().siblings().show());
		$(vid).on("pause", () => video_control_pause.hide().siblings().show());
	}

	$.fn.twitterVideoPlayer = function () {
		return this.each(function () {
			twitterVideoPlayer($(this));
		});
	};
})(jQuery);

$(document).ready(() => $(".video").twitterVideoPlayer());
