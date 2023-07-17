var i = 0;
var txt = document.getElementById("texto-oculto").innerHTML; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var isTyping = true;


/* Sonido maquina escribir*/
var snd1 = new Audio();
var src1 = document.createElement("source");
src1.type = "audio/mpeg";
src1.src = "../assets/sonido/teclado.mp3";
snd1.loop = true;
snd1.appendChild(src1);

function togglePlay(myAudio) {
  isTyping ? myAudio.play() : myAudio.pause();
};

function typewriter() {
  setTimeout(() => {
    togglePlay(snd1);
  }, 500);
  
  if (i < txt.length && isTyping) {
    var currentChar = txt.charAt(i);
    var nextChar = txt.charAt(i + 1);
    if (currentChar === "<" && nextChar === "a") {
      // Verificar si es un enlace
      var linkEndIndex = txt.indexOf(">", i);
      var linkTextStartIndex = txt.indexOf(">", linkEndIndex) + 1;
      var linkTextEndIndex = txt.indexOf("<", linkTextStartIndex);
      var linkText = txt.slice(linkTextStartIndex, linkTextEndIndex);

      var linkUrlStartIndex = txt.indexOf('href="') + 'href="'.length;
      var linkUrlEndIndex = txt.indexOf('"', linkUrlStartIndex);
      var linkUrl = txt.slice(linkUrlStartIndex, linkUrlEndIndex);

      document.getElementById("texto").innerHTML +=
        ' <a href="' + linkUrl + '">' + linkText + " </a>";
      i = linkTextEndIndex + 5;
    } else if (
      currentChar === "<" &&
      nextChar === "e" &&
      txt.charAt(i + 2) === "m"
    ) {
      // Verificar si es la etiqueta <em>
      var emEndIndex = txt.indexOf(">", i);
      var emTextStartIndex = emEndIndex + 1;
      var emTextEndIndex = txt.indexOf("<", emTextStartIndex);
      var emText = txt.slice(emTextStartIndex, emTextEndIndex);

      document.getElementById("texto").innerHTML +=
        "<em onclick='startLinternaEffect();changeId();'>" + emText + "</em>";
      i = emTextEndIndex + 4;
    } else {
      if (i === txt.length - 1) {
        isTyping = false;
        document.getElementById("texto").innerHTML +=
          currentChar + "<span>\u25AE</span>";
      } else {
        document.getElementById("texto").innerHTML += currentChar;
      }
    }
    i++;
    setTimeout(typewriter, speed);
  }
}

document.getElementById("cargar-btn").addEventListener("click", function () {
  isTyping = false;
  snd1.pause()
  document.getElementById("texto").innerHTML = txt;
});
window.addEventListener("load", function () {
  typewriter();
});


// function playTypewriterSound(escribiendo) {
//   var snd1 = new Audio();
//   var src1 = document.createElement("source");
//   src1.type = "audio/mpeg";
//   src1.src = "../assets/sonido/teclado.mp3";
  
//   if(escribiendo){
//   setTimeout(() => {
//     snd1.loop = true;
//    snd1.appendChild(src1);
//     snd1.play();
//   }, 500);} else {
//     snd1.pause()
//   }
// }