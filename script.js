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
		const video_voice = $root.find(".video-voice");
		const video_voice_btn = $root.find(".video-voice-btn");
		const video_voice_on = $root.find(".video-voice-on");
		const video_voice_off = $root.find(".video-voice-off");
		const full_screen_btn = $root.find(".full-screen-btn");
		const full_screen_open = $root.find(".full-screen-open");
		const full_screen_exit = $root.find(".full-screen-exit");
		const video_voice_slider = $root.find(".video-voice-slider-range");
		const video_slider = $root.find(".video-slider-container");
		const video_slider_rail = $root.find(".video-slider-rail");
		const video_slider_buffer = $root.find(".video-slider-buffer");
		const video_count_time = $root.find(".video-count-time");
		const video_count_fulltime = $root.find(".video-count-fulltime");
		const video_loading = $root.find(".video-loading");
		const video_reset = $root.find(".video-reset");
		const video_reset_btn = $root.find(".video-reset-btn");
		const video_contextMenu = $root.find(".video-contextMenu");

		var vid = video_element;

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
			if (vid.readyState >= 3) {
				video_loading.hide();
			} else {
				video_loading.show();
				pause();
			}
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
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
				full_screen_open.hide();
				full_screen_exit.show();
			}
		}

		function updatePlayer() {
			const percentage = (vid.currentTime / vid.duration) * 100;
			video_slider_rail.css({
				width: percentage + "%"
			});
			video_slider_buffer.css({
				left: percentage - 1 + "%"
			});
			video_count_time.text(getFormattedTime());
			video_count_fulltime.text(getFormattedFullTime());
		}

		function getFormattedTime() {
			const seconds = Math.round(vid.currentTime);
			const minutes = Math.floor(seconds / 60);
			return `${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
		}

		function getFormattedFullTime() {
			const totalSeconds = Math.round(vid.duration);
			const totalMinutes = Math.floor(totalSeconds / 60);
			return `${totalMinutes.toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`;
		}

		function skip(event) {
			const mouseX = event.pageX - video_slider.offset().left;
			const width = video_slider.outerWidth();
			vid.currentTime = (mouseX / width) * vid.duration;
			updatePlayer();
		}

		video_start_btn.click(function () {
			video_preview.hide();
			play();
		});

		$(vid).on("progress", function () {
			updateLoadingState();
		});

		video_control_btn.click(function () {
			if (vid.paused) {
				play();
			} else {
				pause();
			}
			return false;
		});

		video_voice_btn.click(function () {
			vid.muted ? voiceOff(): voiceOn();
		});

		full_screen_btn.click(toggleFullscreen);

		$(vid).on("timeupdate",
			function () {
				updatePlayer();
			});

		video_voice_slider.on("input change",
			function () {
				const volume = $(this).val();
				vid.volume = volume;
				$root.find(".video-voice-slider-buffer").css("width", volume * 100 + "%");
				volume == 0 ? voiceOn(): voiceOff();
			});

		video_voice_slider.each(function () {
			const volume = localStorage[this.id] || 1;
			$(this).val(volume);
			vid.volume = volume;
			$root.find(".video-voice-slider-buffer").css("width", volume * 100 + "%");
			volume == 0 ? voiceOn(): voiceOff();
		});

		$(vid).on("ended",
			function () {
				video_reset.css("display", "flex");
			});

		video_reset_btn.click(function () {
			vid.currentTime = 0;
			play();
			video_reset.css("display", "none");
		});

		$(video_slider).click(skip);

		$(vid).on("contextmenu",
			function (event) {
				event.preventDefault();
				video_contextMenu.show().css({
					top: event.pageY,
					left: event.pageX
				});
			});

		$(window).click(function () {
			video_contextMenu.fadeOut("fast");
		});

		// Play/Pause button state updates based on video status
		$(vid).on("play",
			function () {
				video_control_play.hide();
				video_control_pause.show();
			});

		$(vid).on("pause",
			function () {
				video_control_pause.hide();
				video_control_play.show();
			});
	}

	$.fn.twitterVideoPlayer = function () {
		return this.each(function () {
			twitterVideoPlayer($(this));
		});
	};
})(jQuery);

$(".video").twitterVideoPlayer();
