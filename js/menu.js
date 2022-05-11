const menuBox = document.getElementById('menu-box');
const bg = document.getElementById('bg');
const hamburgerBox = document.getElementById('hamburger-box');

hamburgerBox.addEventListener('click',() =>{
  menuBox.style.display = 'block';
})

let display = function display(){
  menuBox.style.display = 'none';
}
bg.addEventListener('click', display);