document.addEventListener("DOMContentLoaded", function() {

  var secIntro = document.querySelector('.intro');
  var secBackground = document.querySelector('.background');
  var secGameOver = document.querySelector('.gameOver');

  var startBtn = document.querySelector('.start');

  var introMP3 = document.querySelector('.intro audio');
  var eFX = document.querySelector('.eFX');
  var endMP3 = document.querySelector('.end');

  introMP3.play();

  startBtn.addEventListener('click', function() {
    secIntro.style.display = "none";
    secBackground.style.display = "block";
    introMP3.pause();
    eFX.play();
    setTimeout(function(){
      endMP3.play();
      eFX.pause();
      secBackground.style.display = "none";
      secGameOver.style.display = "flex";
    }, 130000);
  })
})
