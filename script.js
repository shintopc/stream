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
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
            registration.unregister();
        });
    });
}
document.addEventListener("visibilitychange", function () {
  const player = document.getElementById("radioPlayer");
  if (document.hidden) {
    if (!player.paused) {
      player.play(); // Resume playback if tab is hidden
    }
  }
});

