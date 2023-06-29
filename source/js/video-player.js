const video = document.querySelector('.video');
const playButton = document.querySelector(
  '.video-player_play-pause-repeat-button'
);
const timeRangeInput = document.querySelector('.video-player-time-range');

// воспроизведение
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playButton.classList.add('playing');
    playButton.classList.remove('repeat');
  } else {
    video.pause();
    playButton.classList.remove('playing');
  }
}

video.addEventListener('ended', function () {
  playButton.classList.remove('playing');
  playButton.classList.add('repeat');
});
video.addEventListener('click', togglePlayPause);
playButton.addEventListener('click', togglePlayPause);

// стартовая длина

function setMaxTimeRange() {
  timeRangeInput.max = Math.round(video.duration);
}
video.addEventListener('loadedmetadata', setMaxTimeRange);

// Формат времени, минуты секунды
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Установка текущего времени в input value
function updateCurrentTime() {
  const currentTime = video.currentTime;
  const formattedTime = formatTime(currentTime);
  timeRangeInput.value = currentTime;
}

// И наоборот
function updateTimeByRangeInput() {
  const currentTime = parseFloat(timeRangeInput.value);
  video.currentTime = currentTime;
}

video.addEventListener('timeupdate', updateCurrentTime);
timeRangeInput.addEventListener('input', updateTimeByRangeInput);

const fullscreenButton = document.querySelector(
  '.video-player_fullscreen-button'
);

// Полный экран

function toggleFullscreen() {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    toggleFullscreen();
  }
}

fullscreenButton.addEventListener('click', toggleFullscreen);
document.addEventListener('keydown', handleKeyPress);
