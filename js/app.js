document.addEventListener("DOMContentLoaded", function() {

  var secIntro = document.querySelector('.intro');
  var secBackground = document.querySelector('.background');
  var secGameOver = document.querySelector('.gameOver');

  var button = document.querySelector('button');

  var introMP3 = document.querySelector('.intro audio');
  var waveWAV = document.querySelector('.wave');
  var eFX = document.querySelector('.eFX');

  introMP3.play();

  button.addEventListener('click', function() {
    secIntro.style.display = "none";
    secBackground.style.display = "block";
    introMP3.pause();
    waveWAV.loop = true;
    waveWAV.play();
    eFX.play();

  })
})
