const timeout_smoke = 14000;
const timeout_vuelta = 14500;

function startSmokeEffect() {
  const smokeText = document.getElementById("smokeText");
  smokeText.classList.add("smoke-animation");

  setTimeout(() => {
    smokeText.style.display = "none";
  }, timeout_smoke);

  setTimeout(() => {
    smokeText.style.display = "block";
  }, timeout_vuelta);
}

function changeId() {
  const spanElement = document.getElementById("texto");
  spanElement.id = "smokeText";

  startSmokeEffect();
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
    }, 12000);
  }, 12000);
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
