const cardItems = document.querySelectorAll('#items');
const shuffle = document.getElementById('shuffle');
const stop = document.getElementById('stop');
const total = document.getElementById('total');
let cardArray = ['a','b','c','d','e','f','g','h','a','b','c','d','e','f','g','h']; // 카드 종류
let shufflecard = []; // 섞인 카드
let clickAraay = []; // 클릭된 카드
let completeArray = []; // 성공한 카드
let clickFlag = true; // 클릭된 카드 클릭하고 바로 연속된 클릭방지

// start 누르면 시작 or 다시시작
let start = function(){
  completeArray = []; // 성공한 카드 초기화
}

// card 섞기
let shuffleCardFunction = function(){
  for(let i=0; i< 4; i++){
    for(let j=0; j < 4; j++){
    let card = Math.floor(Math.random() * cardArray.length);
      shufflecard.push(cardArray.splice(card,1)[0]);
    }
  }
  // console.log(card);
}
shuffleCardFunction();
cardSetting();
// console.log(shufflecard);

function cardSetting(){
  clickFlag = false;
  for(let i=0; i< cardItems.length; i++){
    // console.log(cardItems[i].children[0].children[1])
    cardItems[i].children[0].children[1].style.backgroundImage = `url("/img/${shufflecard[i]}.gif")`;

    clickFlag = true;
    cardItems[i].addEventListener('click', () =>{
      // console.log(cardItems[i]);
      if(clickFlag && !completeArray.includes(cardItems[i])){
        cardItems[i].classList.toggle('flip');
        clickAraay.push(cardItems[i]);
        if(clickAraay.length === 2){
          console.log(clickAraay[0].children[0].children[1].style.backgroundImage);
          console.log(clickAraay[1].children[0].children[1].style.backgroundImage);
          if(clickAraay[0].children[0].children[1].style.backgroundImage === clickAraay[1].children[0].children[1].style.backgroundImage){
            completeArray.push(clickAraay[0]);
            completeArray.push(clickAraay[1]);
            clickAraay = [];
            if(completeArray.length === img.length){
              console.log('End');
              total.textContent = `축하드립니다. 완성하셨습니다.`
            }
          }
          else{
            console.log(clickFlag);
            clickFlag = false;
            // console.log('!');
            setTimeout(() =>{
              clickAraay[0].classList.remove('flip');
              clickAraay[1].classList.remove('flip');
              clickFlag = true;
              clickAraay = []; // 초기화
            },1000);
          }
        }
      }
    })
  }
}

shuffle.addEventListener('click', ()=>{
  shuffleCardFunction();
  cardSetting();
  completeArray = [];
  clickAraay = [];
  shufflecard = [];
  clickFlag = true;
  total.textContent = '';
  for(let i = 0; i < cardArray.length; i++){
    cardItems[i].classList.remove('flip');
  }
})

stop.addEventListener('click',()=>{
  console.log('stop');
  total.textContent = `${completeArray.length / 2} 개 완성`
})