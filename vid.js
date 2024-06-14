let videoContainer = document.querySelector(".video");
	videoContainer.innerHTML = `
		<div class="video-preview" style="background-image: url('IMG_20240221_170149.png');">
				<button class="video-start-btn">
					<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="#FAC063" d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M357.771,264.969l-149.333,96c-1.75,1.135-3.771,1.698-5.771,1.698c-1.75,0-3.521-0.438-5.104-1.302C194.125,359.49,192,355.906,192,352V160c0-3.906,2.125-7.49,5.563-9.365c3.375-1.854,7.604-1.74,10.875,0.396l149.333,96c3.042,1.958,4.896,5.344,4.896,8.969S360.813,263.01,357.771,264.969z" />
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
				<video id="videoPlayer" data-video="" allowfullscreen="false" poster="false" controlsList="nodownload" src="">
				</video>
			</div>
		</div>
	`;
/*document.body.style.zoom = "1";
	document.body.style.touchAction = "none";*/
document.body.style.background = "#000000";
const videoPlayer = document.getElementById('videoPlayer');
let videoParts = [
	'https://i.imghippo.com/files/WLvY61718398143.mov',
	'https://i.imghippo.com/files/BIzG61718398398.bin',
];
let combinedBlob;

function combinePartsAndPlay() {
	const blobParts = [];

	const fetchPromises = videoParts.map(part => fetch(part).then(response => response.blob()));

	Promise.all(fetchPromises)
	.then(blobs => {
		blobs.forEach(blob => blobParts.push(blob));
		combinedBlob = new Blob(blobParts, {
			type: 'video/quicktime'
		});
		videoPlayer.src = URL.createObjectURL(combinedBlob);
		videoPlayer.play();
	})
	.catch(error => {
		console.error('Hata oluştu:', error);
	});
}

window.onload = combinePartsAndPlay;

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
