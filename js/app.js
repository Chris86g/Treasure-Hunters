document.addEventListener("DOMContentLoaded", function() {

  var secIntro = document.querySelector('.intro');
  var secBackground = document.querySelector('.background');
  var secGameOver = document.querySelector('.gameOver');

  var button = document.querySelector('button');

  button.addEventListener('click', function() {
    secIntro.style.display = "none";
    secBackground.style.display = "block";

  })
})
