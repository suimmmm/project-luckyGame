const menuBox = document.getElementById('menu-box');
const bg = document.getElementById('bg');
const hamburgerBox = document.getElementById('hamburger-box');
const menuDisplay = window.getComputedStyle(menuBox).display;

hamburgerBox.addEventListener('click',() =>{
  if(menuDisplay === 'none'){
    menuBox.style.display = 'block';
    menuDisplay = 'block'
  }
  else{
    menuBox.style.display = 'none';
    menuDisplay = 'none'
  }
})