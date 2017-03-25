document.addEventListener("DOMContentLoaded", function() {

  var secIntro = document.querySelector('.intro');
  var secInfo = document.querySelector('.info');
  var secBackground = document.querySelector('.background');
  var secGameOver = document.querySelector('.gameOver');

  var startBtn = document.querySelector('.startBtn');
  var demoBtn = document.querySelector('.demoBtn');
  var infoBtn = document.querySelector('.infoBtn');
  var closeBtn = document.querySelector('.closeBtn');

  var introMP3 = document.querySelector('.intro audio');
  var grenade = document.querySelector('.grenade');
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
      secGameOver.style.display = "block";
    }, 130000);
  })

  demoBtn.addEventListener('click', function() {
    grenade.play();
  })

  infoBtn.addEventListener('click', function() {
    secInfo.style.display = "block";
    grenade.play();
  })

  closeBtn.addEventListener('click', function() {
    secInfo.style.display = "none";
    grenade.play();
  })
})
