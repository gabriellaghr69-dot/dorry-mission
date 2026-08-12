// =========================================
// RYYBEARRY — INTERACTIONS
// =========================================


// =========================================
// TYPING ANIMATION
// =========================================

const typingText = document.getElementById("typing");

const message =
  "A little corner of the internet, made just for you. ♡";

let typingIndex = 0;

function typing() {

  if (!typingText) return;

  if (typingIndex < message.length) {

    typingText.textContent += message.charAt(typingIndex);

    typingIndex++;

    setTimeout(typing, 45);

  }

}

typing();


// =========================================
// SCROLL REVEAL
// =========================================

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function(entries) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.12
  }
);


sections.forEach(function(section) {

  observer.observe(section);

});


// =========================================
// CHAT REVEAL
// =========================================

const chatItems = document.querySelectorAll(".chat-item");

const chatObserver = new IntersectionObserver(
  function(entries) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);


chatItems.forEach(function(item) {

  item.classList.add("reveal");

  chatObserver.observe(item);

});


// =========================================
// MUSIC
// =========================================

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {

  musicBtn.addEventListener("click", function() {

    if (bgMusic.paused) {

      bgMusic.play();

      musicBtn.classList.add("playing");

      musicBtn.innerHTML = "♫ <span>Music on</span>";

    } else {

      bgMusic.pause();

      musicBtn.classList.remove("playing");

      musicBtn.innerHTML = "♫ <span>Music</span>";

    }

  });

}


// =========================================
// STAR BACKGROUND
// =========================================

const canvas = document.getElementById("stars");

if (canvas) {

  const ctx = canvas.getContext("2d");

  let stars = [];

  function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);


  function createStars() {

    stars = [];

    const amount =
      Math.min(
        180,
        Math.floor(
          (window.innerWidth * window.innerHeight) / 9000
        )
      );

    for (let i = 0; i < amount; i++) {

      stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 1.5 + 0.3,

        opacity: Math.random() * 0.7 + 0.2,

        speed: Math.random() * 0.01 + 0.002

      });

    }

  }

  createStars();


  function drawStars() {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    stars.forEach(function(star) {

      star.opacity +=
        Math.sin(Date.now() * star.speed) * 0.002;

      ctx.beginPath();

      ctx.arc(
        star.x,
        star.y,
        star.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "rgba(255,255,255," +
        Math.max(0.1, star.opacity) +
        ")";

      ctx.fill();

    });

    requestAnimationFrame(drawStars);

  }

  drawStars();

}
