
// Handle TV button clicks
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    const hlsSource = this.getAttribute("data-hls");
    const ytSource = this.getAttribute("data-video");

    const hlsPlayer = document.getElementById("hlsPlayer");
    const ytPlayer = document.getElementById("ytPlayer");

    // Reset players
    hlsPlayer.style.display = "none";
    ytPlayer.style.display = "none";
    hlsPlayer.pause();
    hlsPlayer.src = "";

    if (hlsSource) {
      // HLS playback
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsSource);
        hls.attachMedia(hlsPlayer);
        hlsPlayer.style.display = "block";
        hlsPlayer.play();
      } else if (hlsPlayer.canPlayType("application/vnd.apple.mpegurl")) {
        hlsPlayer.src = hlsSource;
        hlsPlayer.style.display = "block";
        hlsPlayer.play();
      } else {
        alert("HLS is not supported in this browser.");
      }
    } else if (ytSource) {
      // YouTube playback via iframe
      ytPlayer.src = ytSource;
      ytPlayer.style.display = "block";
    }
  });
});

// Handle custom scroll behavior
window.addEventListener("wheel", function (event) {
  const scrollAmount = 100;
  if (event.deltaY < 0) {
    window.scrollBy(0, -scrollAmount); // Scroll up
  } else if (event.deltaY > 0) {
    window.scrollBy(0, scrollAmount); // Scroll down
  }
});
function toggleButtons() {
      const menu = document.getElementById("additionalButtons");
      menu.classList.toggle("open");
    }
