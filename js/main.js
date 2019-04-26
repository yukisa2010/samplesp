(function(){
  'use strict';

  const icon = document.getElementById('menu-icon');
  const spMenu = document.getElementById('menu-sp');
  const closeBtn = document.getElementById('close-btn');
  const footerBtn = document.getElementById('footer-btn');

  icon.addEventListener('click', function(){
    spMenu.classList.remove("align-init");
    spMenu.classList.remove("align-left");
    spMenu.classList.add("align-center");
  });


  closeBtn.addEventListener('click', function(){
    spMenu.addEventListener("transitionend", init);
    spMenu.classList.remove("align-center");
    spMenu.classList.add("align-right");

  });

  function init() {
    spMenu.removeEventListener('transitionend', init);
    spMenu.classList.remove("align-right");
    spMenu.classList.add("align-init");
  }

  footerBtn.addEventListener('click', function(){
    window.scrollTo(0,50);
  });





})()
