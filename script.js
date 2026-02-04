function animateCounter(id, target, duration = 1200) {
  const element = document.getElementById(id);
  let start = 0;
  const step = Math.ceil(target / (duration / 30));

  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    element.innerText = start;
  }, 30);
}

window.addEventListener("load", () => {
  animateCounter("count-projects", 3);
  animateCounter("count-skills", 12);
  animateCounter("count-cgpa", 9);
});
