// =========================================
// TYPING ANIMATION
// =========================================

const typingText =
  "For the boy who somehow became my favorite person.";

const typingElement =
  document.getElementById("typing");

let typingIndex = 0;

function typing() {
  if (!typingElement) return;

  if (typingIndex < typingText.length) {
    typingElement.textContent +=
      typingText.charAt(typingIndex);

    typingIndex++;

    setTimeout(typing, 55);
  }
}

typing();


// =========================================
// SCROLL REVEAL
// =========================================

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


// =========================================
// MUSIC
// =========================================

const musicBtn =
  document.getElementById("musicBtn");

const bgMusic =
  document.getElementById("bgMusic");

if (musicBtn && bgMusic) {

  musicBtn.addEventListener("click", function() {

    if (bgMusic.paused) {

      bgMusic.play()
        .then(function() {

          musicBtn.classList.add("playing");

          musicBtn.innerHTML =
            "♫ <span>Playing...</span>";

        })
        .catch(function(error) {

          console.log(
            "Music could not play:",
            error
          );

        });

    } else {

      bgMusic.pause();

      musicBtn.classList.remove("playing");

      musicBtn.innerHTML =
        "♫ <span>Music</span>";

    }

  });

}


// =========================================
// STAR FIELD
// =========================================

const canvas =
  document.getElementById("stars");

const ctx =
  canvas.getContext("2d");

let stars = [];

function resizeCanvas() {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

}

resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);


// Create stars

function createStars() {

  stars = [];

  const amount =
    Math.min(
      180,
      Math.floor(
        window.innerWidth *
        window.innerHeight /
        9000
      )
    );

  for (let i = 0; i < amount; i++) {

    stars.push({

      x:
        Math.random() *
        canvas.width,

      y:
        Math.random() *
        canvas.height,

      size:
        Math.random() *
        1.5 + 0.3,

      opacity:
        Math.random() *
        0.7 + 0.2,

      speed:
        Math.random() *
        0.008 + 0.002,

      phase:
        Math.random() *
        Math.PI * 2

    });

  }

}

createStars();


// Animate stars

function animateStars(time) {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  stars.forEach(function(star) {

    const twinkle =
      star.opacity +
      Math.sin(
        time * star.speed +
        star.phase
      ) * 0.25;

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,255,255,${Math.max(
        0.05,
        twinkle
      )})`;

    ctx.fill();

  });

  requestAnimationFrame(
    animateStars
  );

}

requestAnimationFrame(
  animateStars
);


// =========================================
// CHAT HOVER MICRO-MOVEMENT
// =========================================

const chatCards =
  document.querySelectorAll(".chat-card");

chatCards.forEach(function(card) {

  card.addEventListener(
    "mouseenter",
    function() {

      card.style.transform =
        "translateY(-8px) rotate(0deg)";

    }
  );

  card.addEventListener(
    "mouseleave",
    function() {

      if (
        card.classList.contains("tilt-left")
      ) {

        card.style.transform =
          "rotate(-2deg)";

      } else {

        card.style.transform =
          "rotate(2deg)";

      }

    }
  );

});
