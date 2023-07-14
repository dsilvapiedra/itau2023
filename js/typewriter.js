var i = 0;
var txt = document.getElementById("texto-oculto").innerHTML; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var isTyping = true;

function typewriter() {
  if (i < txt.length && isTyping) {
    var currentChar = txt.charAt(i);
    if (currentChar === "<") {
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
    } else {
      if (i === txt.length - 1) {
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
  document.getElementById("texto").innerHTML = txt;
});
window.addEventListener("load", function () {
  typewriter();
});

// function typewriter(txt) {
//   if (txt == null) {
//     txt = text;
//   }
//   if (i < txt.length && isTyping) {
//     var currentChar = txt.charAt(i);

//     if (currentChar === "<") {
//       // Verificar si es un enlace
//       var linkEndIndex = txt.indexOf(">", i);
//       var linkTextStartIndex = txt.indexOf(">", linkEndIndex) + 1;
//       var linkTextEndIndex = txt.indexOf("<", linkTextStartIndex);
//       var linkText = txt.slice(linkTextStartIndex, linkTextEndIndex);

//       //   document.getElementById("texto").innerHTML += linkText;

//       var linkUrlStartIndex = txt.indexOf('href="') + 'href="'.length;
//       var linkUrlEndIndex = txt.indexOf('"', linkUrlStartIndex);
//       var linkUrl = txt.slice(linkUrlStartIndex, linkUrlEndIndex);

//       document.getElementById("texto").innerHTML +=
//         ' <a href="' + linkUrl + '">';

//       //   i = linkUrlEndIndex + 1;
//       i = 0;
//       typewriter(linkText);

//       document.getElementById("texto").innerHTML += " </a>";
//       i = linkTextEndIndex + 5;
//     } else {
//       if (i === txt.length - 1) {
//         document.getElementById("texto").innerHTML +=
//           currentChar + "<span>\u25AE</span>";
//       } else {
//         document.getElementById("texto").innerHTML += currentChar;
//       }
//     }

//     i++;
//     setTimeout(function () {
//       typewriter(txt); // Llamada recursiva con el argumento txt
//     }, speed);
//   }
// }
