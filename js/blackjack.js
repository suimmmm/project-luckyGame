const costomerDeck = document.getElementById('costomer-deck');
const computerDeck = document.getElementById('computer-deck');
const btnHit = document.getElementById('hit');
const btnStay = document.getElementById('stay');
const btnStart = document.getElementById('start');
let shape = ['c','s','d','h'] // 카드 모양
let numder = ['a','2','3','4','5','6','7','8','9','10','j','q','k']; // 카드 숫자
let deck = new Array(); // 카드 모양*숫자
let costomer = []; // 내 덱
let computer = []; // 컴퓨터 덱

function card(numder, shape, count){
  this.numder = numder;
  this.shape = shape;
  this.count = count;
}

creative();

// 카드 만들기
function creative(){
  for(let i=0; i < shape.length; i++){
    for(let j=0; j < numder.length; j++){
      let count = parseInt(numder[j]);
      if(numder[j] === 'j' || numder[j] === 'q' || numder[j] === 'k'){
        count = 10;
      }
      if(numder[j] === 'a'){
        count = 1;
      }
      // console.log(count);
      let newCard = new card(numder[j],shape[i],count);
      // console.log(card);
      deck.push(newCard);
    }
  }
  // console.log(deck);
  return deck;
}

// 카드 섞기
function shuffle(deck){
  let shuffleCard = [];

  let location1 = Math.floor(Math.random() * deck.length);
  let location2 = Math.floor(Math.random() * deck.length);
  let tmp = deck[location1];
  deck[location1] = deck[location2];
  deck[location1] = tmp;

  // console.log(deck[location1], deck[location2]);
  shuffleCard.push(deck[location1]);
  shuffleCard.push(deck[location2]);
  // console.log(shuffleCard);
  return shuffleCard;
}

// 섞은 카드 나눠주기
computer = shuffle(deck);
costomer = shuffle(deck);
console.dir(computer);
console.dir(costomer);
// console.log(computer[0].numder);

// 카드 추가

// 총점 계산
let computerTotal = getTotal(computer);
let costomerTotal = getTotal(costomer);

function getTotal(hand){
  let total = 0;
  for(let i=0;i< hand.length; i++){
    total += hand[i].count;
  }
  return total;
}

console.log(computerTotal);
console.log(costomerTotal);

// hit 누를때
btnHit.addEventListener('click',()=>{
  // console.log('l');
  let td_card = document.createElement('td');
  // td_card.style.backgroundImage = `url(/img/card-${}.jpg)`
  costomerDeck.append(td_card);

  // 만약 내가 21 넘으면 졌다고 떠야함
  // 컴퓨터는 17
})

// stay 누를때
btnStay.addEventListener('click',()=>{
  // total 계산 
  // 결과 송출
})

// start 누를때
btnStart.addEventListener('click',()=>{
  creative();
  shuffle(deck);
  computer = shuffle(deck);
  costomer = shuffle(deck);

  costomerDeck.children[0].style.backgroundImage = `url('/img/card-${costomer[0].shape}-${costomer[0].numder}.jpg')`;
  costomerDeck.children[1].style.backgroundImage = `url('/img/card-${costomer[1].shape}-${costomer[1].numder}.jpg')`;

  computerDeck.children[0].style.backgroundImage = `url('/img/card-${computer[0].shape}-${computer[0].numder}.jpg')`;
  computerDeck.children[1].style.backgroundImage = `url('/img/card-${computer[1].shape}-${computer[1].numder}.jpg')`;
})

// 카드 이미지 지정
costomerDeck.children[0].style.backgroundImage = `url('/img/card-${costomer[0].shape}-${costomer[0].numder}.jpg')`;
costomerDeck.children[1].style.backgroundImage = `url('/img/card-${costomer[1].shape}-${costomer[1].numder}.jpg')`;
computerDeck.children[0].style.backgroundImage = `url('/img/card-${computer[0].shape}-${computer[0].numder}.jpg')`;
computerDeck.children[1].style.backgroundImage = `url('/img/card-${computer[1].shape}-${computer[1].numder}.jpg')`;