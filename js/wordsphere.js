const Texts = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];


document.addEventListener("DOMContentLoaded", async() => {
  

  // Giving color to each text in sphere
  var color = "#FF5733 ";
  
  while (isTyping){
    await new Promise(r => setTimeout(r, 2000));
    console.log(isTyping)
  }
  var tagCloud = TagCloud(".Sphere", Texts, {
    // Sphere radius in px
    radius: 180,

    // animation speed
    // slow, normal, fast
    maxSpeed: "normal",
    initSpeed: "fast",

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)]
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true,
  });
  const musica = document.querySelector(".Sphere span");
  const tagCloudClass = document.querySelector(".tagcloud");
  const musicaAudio = new Audio('../assets/sonido/sweeft.wav');
  
  musica.addEventListener("mouseover", () => {

    tagCloudClass.classList.add("show");
    document.querySelector(".Sphere").style.color = color;
    musica.style.color = color;
    musicaAudio.play();
  });

  musica.addEventListener("click", () => {
    tagCloudClass.classList.remove("show");
    document.querySelector(".Sphere").style.color = "black";
    musica.style.color = 'black';
  });
});
