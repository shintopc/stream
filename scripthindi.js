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
const mainButton = document.getElementById("mainButton");
  const submenu = document.getElementById("additionalButtons");

  function toggleButtons() {
    submenu.classList.toggle("open");
  }

  // Close submenu on outside click or submenu link click
  document.addEventListener("click", function (e) {
    if (!mainButton.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.remove("open");
    }
  });

  // Close submenu when any link inside it is clicked
  document.querySelectorAll(".dropdownButton").forEach(btn => {
    btn.addEventListener("click", () => {
      submenu.classList.remove("open");
    });
  });


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
