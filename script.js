document.addEventListener("DOMContentLoaded", () => {
  const imgWrapper = document.querySelector(".img-wrapper");
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");
  const subtext = document.querySelector(".subtext");
  const btn = document.querySelector(".btn");
  const info = document.querySelector(".info");

  setTimeout(() => {
    imgWrapper.classList.add("animated");
  }, 100);

  setTimeout(() => {
    title.classList.add("visible");
  }, 100);

  setTimeout(() => {
    subtitle.classList.add("visible");
  }, 500);

  setTimeout(() => {
    subtext.classList.add("visible");
  }, 1000);

  setTimeout(() => {
    btn.classList.add("visible");
  }, 1500);

  setTimeout(() => {
    info.classList.add("visible");
  }, 1000);

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 500, // Количество частиц
        density: {
          enable: true,
          value_area: 100, // Плотность распределения
        },
      },
      color: {
        value: "#F9DC98", // Золотой цвет блесток
      },
      shape: {
        type: "circle", // Форма частицы (круг)
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 1,
        random: true, // Случайная прозрачность
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 2, // Размер частиц
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // Отключаем линии между частицами
      },
      move: {
        enable: true,
        speed: 0.5, // Скорость движения
        direction: "bottom-right", // Движение вниз
        random: false,
        straight: false,
        out_mode: "out", // Частицы выходят за пределы экрана
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false, // Взаимодействие при наведении отключено
        },
        onclick: {
          enable: false, // Взаимодействие при клике отключено
        },
        resize: true,
      },
    },
    retina_detect: true,
  });
});
