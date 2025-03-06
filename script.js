// Handle radio button clicks
document.querySelectorAll(".button[data-audio]").forEach((button) => {
  button.addEventListener("click", function () {
    const audioSource = this.getAttribute("data-audio");
    const player = document.getElementById("radioPlayer");
    if (player) {
      player.src = audioSource;
      player.play();
    }
  });
});

// Handle TV button clicks
document.querySelectorAll(".button[data-video]").forEach((button) => {
  button.addEventListener("click", function () {
    const videoSource = this.getAttribute("data-video");
    const tvPlayer = document.getElementById("tvPlayer");
    if (tvPlayer) {
      tvPlayer.src = videoSource;
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
  const additionalButtons = document.getElementById("additionalButtons");
  additionalButtons.classList.toggle("hidden");
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered: ', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed: ', error);
      });
  });
}
