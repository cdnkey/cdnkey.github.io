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
    const video_start_btn = $root.find(".video-start-btn");
    const video_control_play = $root.find(".video-control-play");
    const video_control_pause = $root.find(".video-control-pause");

    var vid = video_element.get(0);

    function play() {
      vid.play();
      video_control_play.hide();
      video_control_pause.show();
    }

    function pause() {
      vid.pause();
      video_control_pause.hide();
      video_control_play.show();
    }

    video_start_btn.click(function () {
      $(this).hide(); // Hide the start button when clicked
      play();
    });

    // Return relevant methods or objects here if needed
    return {
      play: play,
      pause: pause
    };
  }

  $.fn.twitterVideoPlayer = jQueryPlugin("twitterVideoPlayer", twitterVideoPlayer);
})();

$(".video").twitterVideoPlayer();
