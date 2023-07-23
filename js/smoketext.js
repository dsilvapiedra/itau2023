const timeout_smoke = 21000;
const timeout_vuelta = 21001;

var song = document.getElementById("audioplayer");
var distort = document.getElementById("audiodistort");

function decreaseVolume(sound, intervalTime) {
  var currentVolume = sound.volume;
  var interval = setInterval(function () {
    if (currentVolume > 0.1) {
      currentVolume -= 0.05; // Disminuir el volumen en un 10% (puedes ajustar este valor según tus necesidades)
      sound.volume = currentVolume;
    } else {
      clearInterval(interval); // Detener el intervalo cuando el volumen llega a 0
      sound.pause();
    }
  }, intervalTime);
}

function increaseVolume(sound, intervalTime) {
  var currentVolume = sound.volume;
  var interval = setInterval(function () {
    sound.play();
    if (currentVolume < 1) {
      currentVolume += 0.05; // Disminuir el volumen en un 10% (puedes ajustar este valor según tus necesidades)
      sound.volume = currentVolume;
    } else {
      currentVolume = 1;
      clearInterval(interval); // Detener el intervalo cuando el volumen llega a 0
    }
  }, intervalTime);
}

function startGlitchSoundEffect() {
  decreaseVolume(song, 700);
  distort.play();
  setTimeout(() => {
    decreaseVolume(distort, 1000); // Disminuir el volumen de snd1 gradualmente cada segundo (1000 milisegundos)
  }, 27000);
  setTimeout(() => {
    increaseVolume(song, 700); // Disminuir el volumen de snd1 gradualmente cada segundo (1000 milisegundos)
  }, 30000);
  /*pausar audio, comenzar audio glitcheado a mano*/
}

function startSmokeEffect() {
  /* Smoke effect*/
  const text = document.getElementById("smokeText");

  // divido en letras
  text.innerHTML = text.textContent.replace(
    /\S/g,
    "<span class='division'>$&</span>"
  );

  const letters = document.querySelectorAll(".division");
  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", function () {
      letters[i].classList.add("activa");
    });
  }
}

function changeId() {
  const spanElement = document.getElementById("texto");
  spanElement.id = "smokeText";

  startSmokeEffect();

  moveElementsRandomly();
}

function moveElementsRandomly() {
  const elementsToMove = document.querySelectorAll(
    ".links-navegacion, .button-container"
  );
  const originalPositions = []; // Almacena las posiciones originales de los elementos

  // Guardar las posiciones originales
  elementsToMove.forEach(function (element) {
    originalPositions.push({
      element: element,
      left: element.offsetLeft,
      top: element.offsetTop,
    });
  });

  const interval = setInterval(function () {
    elementsToMove.forEach(function (element) {
      element.style.position = "absolute";
      element.style.left = getRandomPosition() + "px";
      element.style.top = getRandomPosition() + "px";
    });
  }, 1000); // Intervalo de 1 segundo (ajusta según tus necesidades)

  setTimeout(function () {
    clearInterval(interval); // Detener el intervalo después de 30 segundos

    // // Restaurar las posiciones originales
    // originalPositions.forEach(function (position) {
    //   position.element.style.left = position.left + "px";
    //   position.element.style.top = position.top + "px";
    // });
    // Restaurar las posiciones originales
    originalPositions.forEach(function (position, index) {
      if (index === 0) {
        // Solo el primer elemento vuelve a la posición original
        position.element.style.left = position.left + "px";
        position.element.style.top = position.top + "px";
        position.element.style.position = "inherit";
      } else {
        // Los otros elementos se ocultan
        position.element.style.display = "none";
      }
    });
  }, 30000); // 30 segundos (ajusta según tus necesidades)
}

function getRandomPosition() {
  const maxWidth = window.innerWidth - 100; // Ajusta el ancho máximo de la posición aleatoria
  const maxHeight = window.innerHeight - 100; // Ajusta la altura máxima de la posición aleatoria

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  return randomX;
}

let overlayTimeout;
let circleTimeout;
function startLinternaEffect() {
  const overlay = document.getElementById("overlay");
  const circle = document.createElement("div");
  circle.classList.add("circle");
  document.body.appendChild(circle);

  document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    circle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });

  overlay.style.opacity = "1";
  circle.style.opacity = "1";

  overlayTimeout = setTimeout(function () {
    overlay.style.transition = "opacity 2s cubic-bezier(0.25, 0.1, 0.25, 1)";
    circle.style.transition = "opacity 2s cubic-bezier(0.25, 0.1, 0.25, 1)";
    overlay.style.opacity = "0";
    circle.style.opacity = "0";
    circleTimeout = setTimeout(function () {
      document.body.removeChild(circle);
    }, 35000);
  }, 35000);
}

// function startLinternaEffect() {
//   const overlay = document.getElementById("overlay");
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   document.body.appendChild(circle);

//   document.addEventListener("mousemove", function (event) {
//     const x = event.clientX;
//     const y = event.clientY;
//     circle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
//   });

//   setTimeout(function () {
//     overlay.style.opacity = "1";
//     circle.style.opacity = "1";
//   }, 6000);
// }
