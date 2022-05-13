const cardItems = document.querySelectorAll('#items');
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
let shuffle = function(){
  for(let i=0; i< 4; i++){
    for(let j=0; j < 4; j++){
    let card = Math.floor(Math.random() * cardArray.length);
      shufflecard.push(cardArray.splice(card,1)[0]);
    }
  }
  // console.log(card);
}
shuffle();
console.log(shufflecard);

for(let i=0; i< cardItems.length; i++){
  // console.log(cardItems[i].children[0].children[1])
  cardItems[i].children[0].children[1].style.backgroundImage = `url("/img/${shufflecard[i]}.gif")`;
  cardItems[i].addEventListener('click', () =>{
    // console.log(cardItems[i]);
    cardItems[i].classList.toggle('flip');
  })
}