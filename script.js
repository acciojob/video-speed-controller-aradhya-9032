// Get the video player elements
const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeRange = document.querySelector('.player__slider[name="volume"]');
const playbackSpeedRange = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

// Function to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚'; // Change the play button to pause symbol
  } else {
    video.pause();
    playButton.textContent = '►'; // Change the pause button to play symbol
  }
}

// Function to update the progress bar
function updateProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${progressPercentage}%`;
}

// Function to handle volume change
function handleVolumeChange() {
  video.volume = volumeRange.value;
}

// Function to handle playback speed change
function handlePlaybackSpeedChange() {
  video.playbackRate = playbackSpeedRange.value;
}

// Function to skip forward or backward
function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volumeRange.addEventListener('input', handleVolumeChange);
playbackSpeedRange.addEventListener('input', handlePlaybackSpeedChange);
skipButtons.forEach(button => button.addEventListener('click', skip));


// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
