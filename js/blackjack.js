let shape = ['클로버','스페이드','다이아몬드','하트'] // 카드 모양
let numder = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']; // 카드 숫자
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
      if(numder[j] === 'J' || numder[j] === 'Q' || numder[j] === 'K'){
        count = 10;
      }
      if(numder[j] === 'A'){
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
console.log(computer);
console.log(costomer);

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