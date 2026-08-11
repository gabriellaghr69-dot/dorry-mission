// RYYBEARRY BIRTHDAY WEBSITE

// ==========================
// TYPING EFFECT
// ==========================

const typingElement = document.getElementById("typing");

const messages = [
  "I made something for you...",
  "because apparently, saying happy birthday wasn't enough.",
  "So... here we are. ❤️"
];

let messageIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typing() {
  if (!typingElement) return;

  const message = messages[messageIndex];

  if (!isDeleting) {
    typingElement.textContent =
      message.substring(0, letterIndex + 1);

    letterIndex++;

    if (letterIndex === message.length) {
      isDeleting = true;
      setTimeout(typing, 1800);
      return;
    }

    setTimeout(typing, 65);

  } else {
    typingElement.textContent =
      message.substring(0, letterIndex - 1);

    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      messageIndex++;

      if (messageIndex >= messages.length) {
        messageIndex = 0;
      }

      setTimeout(typing, 400);
      return;
    }

    setTimeout(typing, 35);
  }
}

typing();

// ==========================
// SCROLL REVEAL
// ==========================

const sections =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(
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


// ==========================
// CHAT CARD ANIMATION
// ==========================

const chatItems =
document.querySelectorAll(".chat-item");

const chatObserver =
new IntersectionObserver(
function(entries) {

  entries.forEach(function(entry) {

    if (entry.isIntersecting) {
      entry.target.classList.add("chat-visible");
    }

  });

},
{
  threshold: 0.2
}
);

chatItems.forEach(function(item) {
  chatObserver.observe(item);
});

// ==========================
// MUSIC BUTTON
// ==========================

const musicButton =
  document.getElementById("musicBtn");

const music =
  document.getElementById("bgMusic");

if (musicButton && music) {

  musicButton.addEventListener(
    "click",
    function() {

      if (music.paused) {

        music.play()
          .then(function() {

            musicButton.classList.add("playing");

            const text =
              musicButton.querySelector("span");

            if (text) {
              text.textContent = "Music on";
            }

          })
          .catch(function() {

            alert(
              "Music file belum ditambahkan 🎵"
            );

          });

      } else {

        music.pause();

        musicButton.classList.remove("playing");

        const text =
          musicButton.querySelector("span");

        if (text) {
          text.textContent = "Music";
        }

      }

    }
  );

}


// ==========================
// STAR PARTICLES
// ==========================

const canvas =
  document.getElementById("stars");

if (canvas) {

  const ctx =
    canvas.getContext("2d");

  function resizeCanvas() {

    canvas.width =
      window.innerWidth;

    canvas.height =
      document.documentElement.scrollHeight;

  }

  resizeCanvas();

  const stars = [];

  for (let i = 0; i < 140; i++) {

    stars.push({

      x:
        Math.random() *
        canvas.width,

      y:
        Math.random() *
        canvas.height,

      size:
        Math.random() * 1.5 + 0.3,

      opacity:
        Math.random() * 0.7 + 0.2

    });

  }

  function drawStars() {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    stars.forEach(function(star) {

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
        star.opacity +
        ")";

      ctx.fill();

    });

    requestAnimationFrame(drawStars);
  }

  drawStars();

  window.addEventListener(
    "resize",
    resizeCanvas
  );

}


// ==========================
// PARALLAX EFFECT
// ==========================

window.addEventListener(
  "scroll",
  function() {

    const orb =
      document.querySelector(".orb");

    if (orb) {

      orb.style.transform =
        "translateY(" +
        window.scrollY * 0.15 +
        "px";

    }

  }
);

/* ==========================
   CINEMATIC CHAT ANIMATION
   ========================== */

.chat-item {
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 0.9s ease,
    transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.chat-item.reverse {
  transform: translateY(60px) translateX(40px);
}

.chat-item:not(.reverse) {
  transform: translateY(60px) translateX(-40px);
}

.chat-item.chat-visible {
  opacity: 1;
  transform: translateY(0) translateX(0);
}


/* Floating effect for the screenshot */

.chat-card {
  transition:
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.8s ease;
}

.chat-item.chat-visible .chat-card {
  animation: chatFloat 5s ease-in-out infinite;
}

@keyframes chatFloat {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-7px) rotate(0.4deg);
  }

}


/* Slight delay for the text */

.chat-item .aside {
  opacity: 0;
  transform: translateY(15px);
  transition:
    opacity 0.7s ease 0.35s,
    transform 0.7s ease 0.35s;
}

.chat-item.chat-visible .aside {
  opacity: 1;
  transform: translateY(0);
}
