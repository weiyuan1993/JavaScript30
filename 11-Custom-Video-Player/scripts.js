// get all element
const video = document.querySelector("video");
const progress = document.querySelector(".progress");

const progressBar = document.querySelector(".progress__filled");
// const progressHover = document.querySelector('.progress__hover');

const toggleButton = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

const toggleFullScreenButton = document.querySelector('.fullScreen');
function togglePlay() {
    //這種寫法可以減少 if else
    const method = video.paused ? "play" : "pause";

    video[method]();
}
function updateToggleButton() {
    const buttonStyle = video.paused ? "►" : "❚ ❚";
    //update button
    toggleButton.textContent = buttonStyle;
}
function skip() {
    video.currentTime += parseInt(this.dataset.skip);
}

function updateRange() {
    video[this.name] = this.value;
}

function changeCurrentTime(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function setProgressBar() {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

function handleHoverProgress(e){
    const percent = (e.offsetX / progress.offsetWidth) * 100;
    progressHover.style.width = `${percent}%`;
}
function toggleFullScreen(){
    const method = document.webkitIsFullScreen?'webkitExitFullscreen':'webkitRequestFullscreen'; 
    video[method]();
}
video.addEventListener("click", togglePlay);
toggleButton.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
video.addEventListener("timeupdate", setProgressBar);
skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", updateRange));
ranges.forEach(range => range.addEventListener("mousemove", updateRange));

let mousedown = false;
progress.addEventListener("click", changeCurrentTime);

progress.addEventListener("mousemove",e => mousedown && changeCurrentTime(e));
// progress.addEventListener('mousemove',(e)=>handleHoverProgress(e));

progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

toggleFullScreenButton.addEventListener('click',toggleFullScreen);

