const button = document.getElementById('clicker');

button.onmouseover = () => {
   document.body.style.backgroundImage = "url(\"images/bebe.jpeg\")"
};

button.onmouseleave = () => {
   document.body.style.backgroundImage = "url(\"images/backer.jpeg\")"
}

let clicks = 0;
let volume = 0.0;

button.onclick = () => {
   clicks = clicks + 1;
   if (clicks === 1) {
      document.getElementById('clicks').innerHTML = `${clicks} click`;
   } else document.getElementById('clicks').innerHTML = `${clicks} clicks`;
   if (clicks.toString().includes('69')) {
      var audio = new Audio('sound/amongus.mp3');
      audio.volume = 1.0;
      audio.play();
      console.log('Reached a number that starts with 69 ;)')
   } else {
      let random = Math.floor(Math.random() * 3);
      console.log(random)
      if (random == 0) {
         var audio = new Audio('sound/fart.mp3');
         volume = volume + 0.001;
         if (volume > 1.0) {
            audio.volume = 1.0;
         }
         audio.volume = volume;
         console.log(audio.volume);
         audio.play();
      }
      if (random == 1) {
         var audio = new Audio('sound/fart2.mp3');
         volume = volume + 0.001;
         if (volume > 1.0) {
            audio.volume = 1.0;
         }
         audio.volume = volume;
         console.log(audio.volume);
         audio.play();
      }
      if (random == 2) {
         var audio = new Audio('sound/fart3.mp3');
         volume = volume + 0.001;
         if (volume > 1.0) {
            audio.volume = 1.0;
         }
         audio.volume = volume;
         console.log(audio.volume);

      }
   }
}