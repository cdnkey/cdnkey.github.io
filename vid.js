let loadingDmca = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
loadingDmca.setAttribute('class', 'dmca-banner');
loadingDmca.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
loadingDmca.setAttribute('viewBox', '0 0 1024 1024');
loadingDmca.style.position = 'fixed';
loadingDmca.style.top = '50%';
loadingDmca.style.left = '50%';
loadingDmca.style.zIndex = '50';
loadingDmca.style.transform = 'translate(-50%, -50%)';
loadingDmca.style.width = '80%';
document.body.appendChild(loadingDmca);

let loadingDmcaDefsElement = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
loadingDmca.appendChild(loadingDmcaDefsElement);

let loadingDmcaDefsPatternElement = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
loadingDmcaDefsPatternElement.setAttribute('id', 'dmca');
loadingDmcaDefsPatternElement.setAttribute('x', '0');
loadingDmcaDefsPatternElement.setAttribute('y', '0');
loadingDmcaDefsPatternElement.setAttribute('width', '100%');
loadingDmcaDefsPatternElement.setAttribute('height', '100%');
loadingDmcaDefsPatternElement.setAttribute('patternUnits', 'objectBoundingBox');
loadingDmcaDefsElement.appendChild(loadingDmcaDefsPatternElement);

let loadingDmcaDefsPatternImageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
loadingDmcaDefsPatternImageElement.setAttribute('href', 'https://cdnkey.github.io/dmca.jpeg');
loadingDmcaDefsPatternImageElement.setAttribute('width', '100%');
loadingDmcaDefsPatternImageElement.setAttribute('height', '100%');
loadingDmcaDefsPatternImageElement.style.filter = 'blur(10px)';
loadingDmcaDefsPatternElement.appendChild(loadingDmcaDefsPatternImageElement);

let loadingDmcaDefsPatternLayer = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
loadingDmcaDefsPatternLayer.setAttribute('x', '0');
loadingDmcaDefsPatternLayer.setAttribute('y', '0');
loadingDmcaDefsPatternLayer.setAttribute('width', '100%');
loadingDmcaDefsPatternLayer.setAttribute('height', '100%');
loadingDmcaDefsPatternLayer.setAttribute('fill', 'rgba(0, 0, 0, 0.6)');
loadingDmcaDefsPatternLayer.style.filter = 'blur(100px)';
loadingDmcaDefsPatternElement.appendChild(loadingDmcaDefsPatternLayer);

let loadingDmcaRectFill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
loadingDmcaRectFill.setAttribute('fill', 'url(#dmca)');
loadingDmcaRectFill.setAttribute('x', '0');
loadingDmcaRectFill.setAttribute('y', '0');
loadingDmcaRectFill.setAttribute('width', '100%');
loadingDmcaRectFill.setAttribute('height', '100%');
loadingDmca.appendChild(loadingDmcaRectFill);

let loadingDmcaGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
loadingDmcaGroup.setAttribute('transform', 'translate(400 400) scale(4)');
loadingDmca.appendChild(loadingDmcaGroup);
loadingDmcaGroupPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
loadingDmcaGroupPath.setAttribute('fill', '#fff');
loadingDmcaGroupPath.setAttribute('d', 'M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z');
loadingDmcaGroup.appendChild(loadingDmcaGroupPath);

let loadingDmcaGroupPathAnimateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
loadingDmcaGroupPathAnimateTransform.setAttribute('attributeType', 'xml');
loadingDmcaGroupPathAnimateTransform.setAttribute('attributeName', 'transform');
loadingDmcaGroupPathAnimateTransform.setAttribute('type', 'rotate');
loadingDmcaGroupPathAnimateTransform.setAttribute('from', '0 25 25');
loadingDmcaGroupPathAnimateTransform.setAttribute('to', '360 25 25');
loadingDmcaGroupPathAnimateTransform.setAttribute('dur', '0.6s');
loadingDmcaGroupPathAnimateTransform.setAttribute('repeatCount', 'indefinite');
loadingDmcaGroupPath.appendChild(loadingDmcaGroupPathAnimateTransform);

setTimeout(function() {
	var newStyleCombined = document.createElement('style');
	newStyleCombined.setAttribute('id', 'style-82ea72c7');
	newStyleCombined.innerHTML = `
		.dmca-banner image {
			animation: dmcaBannerBlurChange 12s linear infinite;
		}
		@keyframes dmcaBannerBlurChange {
			0% {
				pointer-events: auto;
			}
			50% {
				filter: blur(0);
			}
			100% {
				pointer-events: auto;
			}
		}
	`;
	document.body.appendChild(newStyleCombined);
}, 400);

let videoContainer = document.querySelector('.video');
	videoContainer.innerHTML = `
		<div class="video-preview">
				<button class="video-start-btn">
					<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="#1789F5" d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M357.771,264.969l-149.333,96c-1.75,1.135-3.771,1.698-5.771,1.698c-1.75,0-3.521-0.438-5.104-1.302C194.125,359.49,192,355.906,192,352V160c0-3.906,2.125-7.49,5.563-9.365c3.375-1.854,7.604-1.74,10.875,0.396l149.333,96c3.042,1.958,4.896,5.344,4.896,8.969S360.813,263.01,357.771,264.969z" />
					</svg>
				</button>
			</div>
			<div class="video-reset">
				<button class="video-reset-btn"></button>
			</div>
			<div class="video-player-controls">
				<div class="video-slider">
					<div class="video-slider-container">
						<div class="video-slider-bg">
							<div class="video-slider-rail"></div>
							<div class="video-slider-buffer"></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="wrap">
						<div class="video-control">
							<button class="video-control-btn">
								<svg class="video-control-play" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">
									<polygon points="5 3 19 12 5 21 5 3" fill="currentColor">
									</polygon>
								</svg>
								<svg class="video-control-pause" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision">
									<rect x="6" y="4" width="4" height="16" fill="currentColor"></rect>
									<rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>
								</svg>
							</button>
						</div>
					</div>
					<div class="wrap">
						<div class="video-counts">
							<span class="video-count-time"></span><span class="video-count-line"></span><span class="video-count-fulltime"></span>
						</div>
						<div class="video-voice">
							<div class="video-voice-slider">
								<div class="video-voice-slider-rail" role="slider">
									<div class="video-voice-slider-buffer"></div>
									<input class="video-voice-slider-range" type="range" min="0" max="1" value="1" step="0.01" />
								</div>
							</div>
							<button class="video-voice-btn">
								<svg class="video-voice-on" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
									<path d="M11 5L6 9H2v6h4l5 4V5z"></path>
									<path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"></path>
								</svg>
								<svg class="video-voice-off" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
									<path d="M11 5L6 9H2v6h4l5 4V5z"></path>
									<path d="M23 9l-6 6"></path>
									<path d="M17 9l6 6"></path>
								</svg></button>
						</div>
						<div class="full-screen">
							<button class="full-screen-btn">
								<svg class="full-screen-open" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
									<path d="M15 3h6v6"></path>
									<path d="M9 21H3v-6"></path>
									<path d="M21 3l-7 7"></path>
									<path d="M3 21l7-7"></path>
								</svg>
								<svg class="full-screen-exit" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
									<path d="M4 14h6v6"></path><path d="M20 10h-6V4"></path>
									<path d="M14 10l7-7"></path>
									<path d="M3 21l7-7"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="video-player">
				<video id="videoPlayer" data-video allowfullscreen="false" poster="https://cdnkey.github.io/blank.svg" controlsList="nodownload">
				</video>
			</div>
		</div>
	`;

document.body.style.background = '#000000';

const video = document.getElementById('videoPlayer');
const videoControl = document.querySelector('.video-control');
const videoSliderContainer = document.querySelector('.video-slider-container');

video.addEventListener('timeupdate', () => {
	if (video.currentTime === video.duration) {
		videoControl.style.display = 'none';
		videoSliderContainer.style.pointerEvents = 'none';
		videoSliderContainer.style.opacity = '0.4';
		videoSliderContainer.style.transition = 'opacity 300ms ease';
	} else {
		videoControl.style.display = 'block';
		videoSliderContainer.style.pointerEvents = 'auto';
		videoSliderContainer.style.opacity = '1';
	}
});

(function () {
	"use strict";
	var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
		return function (arg) {
			if (this.length > 1) {
				this.each(function () {
					var $this = $(this);

					if (!$this.data(ident)) {
						$this.data(ident, func($this, arg));
					}
				});

				return this;
			} else if (this.length === 1) {
				if (!this.data(ident)) {
					this.data(ident, func(this, arg));
				}

				return this.data(ident);
			}
		};
	});
})();
(function () {
	"use strict";
	function twitterVideoPlayer($root) {
		const element = $root;
		const video = $root.first(".video");
		const video_element = $root.find("[data-video]");
		const video_preview = $root.find(".video-preview");
		const video_top = $root.find(".video-top");
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
		const video_voice_rail = $root.find(".video-voice-slider-rail");
		const video_voice_buffer = $root.find(".video-voice-slider-buffer");
		const video_slider = $root.find(".video-slider-container");
		const video_slider_rail = $root.find(".video-slider-rail");
		const video_slider_buffer = $root.find(".video-slider-buffer");
		const video_count_time = $root.find(".video-count-time");
		const video_count_fulltime = $root.find(".video-count-fulltime");
		const video_loading = $root.find(".video-loading");
		const video_reset = $root.find(".video-reset");
		const video_reset_btn = $root.find(".video-reset-btn");
		const video_contextMenu = $root.find(".video-contextMenu");

		var vid = $(video_element).get(0);

		function play() {
			video_start_btn.click(function () {
				if (vid) {
					vid.play();
					video_control_play.hide();
					video_control_pause.show();
				}
			});

			video_control_btn.click(function () {
				if (vid.paused) {
					vid.play();
					video_control_play.hide();
					video_control_pause.show();
				} else {
					vid.pause();
					video_control_pause.hide();
					video_control_play.show();
				}
				return false;
			});
		}

		play();

		function pause() {
			vid.pause();
			video_control_pause.hide();
			video_control_play.show();
		}
		/*function loading() {
			if (vid.readyState === 4) {
				video_loading.hide();
				play();
			} else {
				video_loading.show();
				pause();
			}
		}*/
		function voiceOn() {
			vid.muted = true;
			$(video_voice_on).hide();
			$(video_voice_off).show();
		}
		function voiceOff() {
			vid.muted = false;
			$(video_voice_on).show();
			$(video_voice_off).hide();
		}
		function Fullscreen(element) {
			if (element.requestFullscreen) element.requestFullscreen();
			else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
			else if (element.webkitRequestFullscreen)
				element.webkitRequestFullscreen();
			else if (element.msRequestFullscreen) element.msRequestFullscreen();
			full_screen_open.hide();
			full_screen_exit.show();
		}
		function exitFullscreen() {
			if (document.exitFullscreen) document.exitFullscreen();
			else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
			else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
			else if (document.msExitFullscreen) document.msExitFullscreen();
			full_screen_open.show();
			full_screen_exit.hide();
		}
		function IsFullScreen() {
			var full_screen_element =
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.mozFullScreenElement ||
			document.msFullscreenElement ||
			null;

			if (full_screen_element === null) return false;
			else return true;
		}
		function updateplayer() {
			var percentage = (vid.currentTime / vid.duration) * 100;
			video_slider_rail.css({
				width: percentage + "%"
			});
			video_slider_buffer.css({
				left: percentage - 1 + "%"
			});
			video_count_time.text(getFormatedTime());
			video_count_fulltime.text(getFormatedFullTime());
		}
		function getTimeState() {
			var mouseX = event.pageX - video_slider.offset().left,
			width = video_slider.outerWidth();

			var currentSeconeds = Math.round((mouseX / width) * vid.duration);
			var currentMinutes = Math.floor(currentSeconeds / 60);

			if (currentMinutes > 0) {
				currentSeconeds -= currentMinutes * 60;
			}
			if (currentSeconeds.toString().length === 1) {
				currentSeconeds = "0" + currentSeconeds;
			}
			if (currentMinutes.toString().length === 1) {
				currentMinutes = "0" + currentMinutes;
			}

			return currentMinutes + ":" + currentSeconeds;
		}
		function skip() {
			var mouseX = event.pageX - video_slider.offset().left,
			width = video_slider.outerWidth();
			vid.currentTime = (mouseX / width) * vid.duration;
			updateplayer();
		}
		function getFormatedFullTime() {
			var totalSeconeds = Math.round(vid.duration);
			var totalMinutes = Math.floor(totalSeconeds / 60);
			if (totalMinutes > 0) {
				totalSeconeds -= totalMinutes * 60;
			}
			if (totalSeconeds.toString().length === 1) {
				totalSeconeds = "0" + totalSeconeds;
			}
			if (totalMinutes.toString().length === 1) {
				totalMinutes = "0" + totalMinutes;
			}
			return totalMinutes + ":" + totalSeconeds;
		}
		function getFormatedTime() {
			var seconeds = Math.round(vid.currentTime);
			var minutes = Math.floor(seconeds / 60);

			if (minutes > 0) {
				seconeds -= minutes * 60;
			}
			if (seconeds.toString().length === 1) {
				seconeds = "0" + seconeds;
			}
			if (minutes.toString().length === 1) {
				minutes = "0" + minutes;
			}
			return minutes + ":" + seconeds;
		}

		video_start_btn.click(function () {
			$(video_preview).hide();
			play();
		});
		$(vid).on("progress", function () {
			loading();
		});

		video_top.click(function () {
			if (vid.paused) {
				play();
			} else {
				pause();
			}
			return false;
		});
		video_voice_btn.click(function () {
			if (vid.muted === false) {
				voiceOn();
			} else {
				voiceOff();
			}
		});
		full_screen_btn.click(function () {
			if (IsFullScreen()) exitFullscreen();
			else Fullscreen(video[0]);
		});
		video_top.dblclick(function () {
			if (IsFullScreen()) exitFullscreen();
			else Fullscreen(video[0]);
		});
		video_voice_slider.on("input change",
			function () {
				var range = (localStorage[this.id] = $(this).val());
				video_voice_buffer.css("width", range * 100 + "%");
				vid.volume = range;
				video_voice_slider.attr("value", range);
				if (range == 0) {
					voiceOn();
				} else {
					voiceOff();
				}
			});
		video_voice_slider.each(function () {
			if (typeof localStorage[this.id] !== "undefined") {
				$(this).val(localStorage[this.id]);
			}
		});
		video_voice_slider
		.keyup(function () {
			var range = (localStorage[this.id] = $(this).val());
			video_voice_buffer.css("width", range * 100 + "%");
			vid.volume = range;
			video_voice_slider.attr("value", range);
			if (range == 0) {
				voiceOn();
			} else {
				voiceOff();
			}
		})
		.keyup();
		video_slider.click(function () {
			skip();
		});
		updateplayer();
		video_count_fulltime.text(getFormatedFullTime());
		$(vid).on("timeupdate",
			function () {
				updateplayer();
			});
		$(video_slider_buffer).on("input change",
			function () {
				updateplayer();
			});
		$(video_slider_buffer).on("mousemove",
			function () {
				updateplayer();
			});
		$(video_slider_buffer).on("mouseup",
			function () {
				updateplayer();
			});
		video_voice.hover(
			function () {
				video_slider.hide();
			},
			function () {
				video_slider.show();
			}
		);
		$(vid).on("ended",
			function () {
				video_reset.css("display", "flex");
			});

		video_reset_btn.click(function () {
			vid.currentTime = 0;
			vid.play();
			video_control_play.hide();
			video_control_pause.show();
			video_reset.css("display", "none");
		});

		$(video).on("contextmenu",
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
	}

	$.fn.twitterVideoPlayer = jQueryPlugin(
		"twitterVideoPlayer",
		twitterVideoPlayer
	);
})();

$(".video").twitterVideoPlayer();
