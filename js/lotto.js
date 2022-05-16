const resultBox = document.getElementById('result-box');
const bgBox = document.getElementById('bg')
const closeBtn = document.querySelector('#close-box > i')
const capsuleVaule = document.querySelectorAll('#capsule');
const numVaule = document.querySelectorAll('#num');
const shuffleBtn = document.getElementById('shuffle');
const stopBtn = document.getElementById('stop')
let lottoArray =[];

function numPush(){
  for(let i=0; i<10; i++){
    let count =Math.floor(Math.random() * 45) + 1;
    if(lottoArray.indexOf(count) === -1){
      if(lottoArray.length === 5){
        lottoArray.push(count);
      }
    }
    lottoArray.sort();
    let plus = Math.floor(Math.random() *45) +1;
    lottoArray.push(plus);
  }
  // console.log(lottoArray)
  console.log(lottoArray);
}

function count() {
  let count =parseInt(Math.floor(Math.random() * 45) + 1);
  if(lottoArray.indexOf(count) === -1){
    lottoArray.push(count);
  }
}

// capsuleVaule[0].style.animationDuration = '2s';

numPush();
console.log(lottoArray)
function numValuetxt(){
  for(let i =0; i <lottoArray.length; i++){
    numVaule[i].textContent = lottoArray[i];
  }
}

shuffleBtn.addEventListener('click', ()=>{
  lottoArray = [];
  numPush();
  console.log('shuffle')
})
stopBtn.addEventListener('click',()=>{
  resultBox.style.display = 'block';
  numValuetxt();
})
bgBox.addEventListener('click',()=>{
  resultBox.style.display = 'none';
})
closeBtn.addEventListener('click',()=>{
  resultBox.style.display = 'none'
});