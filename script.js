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

  function twitterVideoPlayer($root) {
    const video_element = $root.find("[data-video]");
    const video_control_play = $root.find(".video-control-play");
    const video_control_pause = $root.find(".video-control-pause");
    const video_start_btn = $root.find(".video-start-btn");
    const video_slider = $root.find(".video-slider-container");
    const video_count_time = $root.find(".video-count-time");
    const video_count_fulltime = $root.find(".video-count-fulltime");
    const video_loading = $root.find(".video-loading");
    const video_reset = $root.find(".video-reset");
    const video_reset_btn = $root.find(".video-reset-btn");

    var vid = video_element.get(0);

    function playVideo() {
      vid.play();
      video_control_play.hide();
      video_control_pause.show();
    }

    function pauseVideo() {
      vid.pause();
      video_control_pause.hide();
      video_control_play.show();
    }

    function updatePlayerUI() {
      var percentage = (vid.currentTime / vid.duration) * 100;
      video_slider.css({ width: percentage + "%" });
      video_count_time.text(getFormattedTime(vid.currentTime));
      video_count_fulltime.text(getFormattedTime(vid.duration));
    }

    function getFormattedTime(seconds) {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function onVideoProgress() {
      if (vid.readyState === 4) {
        video_loading.hide();
        playVideo();
      } else {
        video_loading.show();
        pauseVideo();
      }
    }

    function skipToPosition(event) {
      var mouseX = event.pageX - video_slider.offset().left;
      var width = video_slider.outerWidth();
      vid.currentTime = (mouseX / width) * vid.duration;
      updatePlayerUI();
    }

    function resetVideo() {
      vid.currentTime = 0;
      playVideo();
      video_reset.hide();
    }

    video_start_btn.click(function () {
      playVideo();
      video_start_btn.hide();
    });

    $(vid).on("progress", onVideoProgress);
    $(vid).on("timeupdate", updatePlayerUI);
    video_slider.click(skipToPosition);
    video_reset_btn.click(resetVideo);

    // Initial UI setup
    updatePlayerUI();
    video_count_fulltime.text(getFormattedTime(vid.duration));

    // Return any relevant methods or objects here if needed
    return {
      play: playVideo,
      pause: pauseVideo,
      reset: resetVideo
    };
  }

  $.fn.twitterVideoPlayer = jQueryPlugin("twitterVideoPlayer", twitterVideoPlayer);
})();

$(".video").twitterVideoPlayer();
