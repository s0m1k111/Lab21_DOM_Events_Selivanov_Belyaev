let seconds = 0;
let interval = null;

const timeEl = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const sbrosBtn = document.querySelector(".sbros");

function updateTime() {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;

  timeEl.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(() => {
      seconds++;
      updateTime();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

sbrosBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateTime();
});
