// User interface elements
var modal = document.getElementById("myModal");
var btn = document.getElementById("gear");
var span = document.getElementsByClassName("close")[0];
var volumeSlider = document.getElementById("volumeSlider");
var soundIcon = document.querySelector(".sound");
var fullscreenIcon = document.querySelector(".fullscreen");
var coinNumber = document.querySelector(".coin-number");

// Initialize coin count
var coins = 0;
coinNumber.textContent = coins;

// Coin control function
function increaseCoins() {
  coins++;
  coinNumber.textContent = coins;
}

// Volume control functions
function increaseVolume() {
  if (volumeSlider.value < 100) {
    volumeSlider.value++;
  }
}

function decreaseVolume() {
  if (volumeSlider.value > 0) {
    volumeSlider.value--;
  }
}

// Sound control function
function toggleSound() {
  if (volumeSlider.value != 0) {
    volumeSlider.value = 0;
  } else {
    volumeSlider.value = 50;
  }
}

// Modal control functions
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function closeModalIfClickedOutside(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Fullscreen control function
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Event listeners
btn.onclick = openModal;
span.onclick = closeModal;
window.onclick = closeModalIfClickedOutside;
soundIcon.onclick = toggleSound;
fullscreenIcon.onclick = toggleFullScreen;

window.addEventListener("keydown", function (event) {
  if (event.key === "v") {
    increaseVolume();
  } else if (event.key === "c") {
    decreaseVolume();
  } else if (event.key === "z") {
    toggleFullScreen();
  }
});

// Increase coins every second
setInterval(increaseCoins, 1000);
