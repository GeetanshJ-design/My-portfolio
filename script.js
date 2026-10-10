const typingElement = document.getElementById("typing");

const words = [
  "beautiful websites.",
  "web experiences.",
  "cool projects."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentWord.substring(0, charIndex);

  let delay = deleting ? 45 : 90;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    delay = 1200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

// Contact button
const contactButton = document.getElementById("contactBtn");

contactButton.addEventListener("click", function () {
  alert("Hey! Thanks for visiting my portfolio. 👋");
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  observer.observe(element);
});