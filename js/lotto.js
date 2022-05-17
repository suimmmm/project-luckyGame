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
    lottoArray.sort(function(a,b){return a -b});
    if(lottoArray.length < 5){
      let count =Math.floor(Math.random() * 45) + 1;
      if(lottoArray.indexOf(count) === -1){
        lottoArray.push(count);
      }
    }
  }
  let plus = Math.floor(Math.random() *45) +1;
  if(lottoArray.indexOf(plus) === -1){
    lottoArray.push(plus);
  }
  console.log(lottoArray);
}

console.log(lottoArray)
function numValuetxt(){
  for(let i =0; i <lottoArray.length; i++){
    numVaule[i].textContent = lottoArray[i];
  }
}

shuffleBtn.addEventListener('click', ()=>{
  lottoArray = [];
  numPush();
  console.log('shuffle');
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