
function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  let current = 0;
  const speed = 200;
  const increment = target / speed;

  function update() {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  }

  update();
}

const counters = document.querySelectorAll(".stat");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
      } else {
        entry.target.innerText = "0";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => {
  observer.observe(counter);
});

