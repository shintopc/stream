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
  const buttons = document.getElementById("secondary-buttons");
  buttons.classList.toggle("hidden");
}
