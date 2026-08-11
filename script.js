// ================================
// RYYBEARRY BIRTHDAY WEBSITE
// Interactive scroll + particles
// ================================


// --------------------------------
// TYPING ANIMATION
// --------------------------------

const typingText = [
  "I made something for you...",
  "because apparently saying happy birthday wasn't enough.",
  "So... here we are. ❤️"
];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

  const currentText = typingText[textIndex];

  if (!deleting) {

    typingElement.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {

      deleting = true;

      setTimeout(typeWriter, 1800);
      return;
    }

  } else {

    typingElement.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      textIndex++;

      if (textIndex >= typingText.length) {
        textIndex = 0;
      }

    }

  }

  setTimeout(
    typeWriter,
    deleting ? 35 : 65
  );
}

typeWriter();


// --------------------------------
// SCROLL REVEAL
// --------------------------------

const revealElements =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {
  observer.observe(element);
});


// --------------------------------
// MUSIC
// --------------------------------

const musicButton =
  document.getElementById("musicBtn");

const music =
  document.getElementById("bgMusic");

let musicPlaying = false;

musicButton.addEventListener(
  "click",
  () => {

    if (!musicPlaying) {

      music.play()
        .then(() => {

          musicPlaying = true;

          musicButton.classList.add("playing");

          musicButton.querySelector("span").textContent =
            "Music on";

        })
        .catch(() => {

          alert(
            "Add your music file as Assets/music.mp3 first 🎵"
          );

        });

    } else {

      music.pause();

      musicPlaying = false;

      musicButton.classList.remove("playing");

      musicButton.querySelector("span").textContent =
        "Music";

    }

  }
);


// --------------------------------
// STAR PARTICLES
// --------------------------------

const canvas =
  document.getElementById("stars");

const ctx =
  canvas.getContext("2d");

let stars = [];

function resizeCanvas() {

  canvas.width =
    window.innerWidth;

  canvas.height =
    document.body.scrollHeight;

}

function createStars() {

  stars = [];

  const amount =
    Math.min(
      180,
      Math.floor(
        window.innerWidth * 0.15
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
        Math.random() * 1.8 + 0.3,

      speed:
        Math.random() * 0.25 + 0.05,

      opacity:
        Math.random() * 0.7 + 0.2,

      twinkle:
        Math.random() * 0.02 + 0.005

    });

  }

}

function animateStars() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  stars.forEach((star) => {

    star.opacity +=
      Math.sin(
        Date.now() * star.twinkle
      ) * 0.003;

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,255,255,${star.opacity})`;

    ctx.fill();

    star.y -= star.speed;

    if (star.y < 0) {

      star.y =
        canvas.height;

    }

  });

  requestAnimationFrame(
    animateStars
  );

}

resizeCanvas();
createStars();
animateStars();

window.addEventListener(
  "resize",
  () => {

    resizeCanvas();
    createStars();

  }
);


// --------------------------------
// PARALLAX EFFECT
// --------------------------------

window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;

    const orb =
      document.querySelector(".orb");

    if (orb) {

      orb.style.transform =
        `translateY(${scroll * 0.18}px)`;

    }

  }
);


// --------------------------------
// SMOOTH IMAGE ENTRANCE
// --------------------------------

const images =
  document.querySelectorAll(
    ".chat-card img, .polaroid img, .us-photo img"
  );

images.forEach((img) => {

  img.addEventListener(
    "load",
    () => {

      img.classList.add("loaded");

    }
  );

});


// --------------------------------
// FINAL LITTLE SURPRISE
// --------------------------------

const ending =
  document.querySelector(".ending");

if (ending) {

  ending.addEventListener(
    "mouseenter",
    () => {

      ending.classList.add("heart-beat");

    }
  );

}
