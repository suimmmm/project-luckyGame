const costomerDeck = document.getElementById('costomer-deck');
const computerDeck = document.getElementById('computer-deck');
const backCount = document.querySelector('#back-count > td');
const btnHit = document.getElementById('hit');
const btnStay = document.getElementById('stay');
const btnStart = document.getElementById('start');
const txtTotal = document.getElementById('total');
let shape = ['c','s','d','h']; // 카드 모양
let numder = ['a','2','3','4','5','6','7','8','9','10','j','q','k']; // 카드 숫자
let deck = new Array(); // 카드 모양*숫자
let costomer = []; // 나
let computer = []; // 컴퓨터
let cos_td_card; // 나 카드 추가
let com_td_card; // 컴퓨터 카드 추가
let countCard = 48;
let result = '';
let comTxt = document.createElement('p');
let cosTxt = document.createElement('p');
let resultTxt = document.createElement('p');
txtTotal.appendChild(comTxt);
txtTotal.appendChild(cosTxt);
txtTotal.appendChild(resultTxt);

backCount.textContent = `${countCard}`;

function card(numder, shape, count){
  this.numder = numder;
  this.shape = shape;
  this.count = count;
}

creative();

// 카드 이미지 지정
// costomerDeck.children[0].style.backgroundImage = `url('/img/card-${costomer[0].shape}-${costomer[0].numder}.jpg')`;
// costomerDeck.children[1].style.backgroundImage = `url('/img/card-${costomer[1].shape}-${costomer[1].numder}.jpg')`;
// computerDeck.children[0].style.backgroundImage = `url('/img/card-${computer[0].shape}-${computer[0].numder}.jpg')`;
// computerDeck.children[1].style.backgroundImage = `url('/img/card-${computer[1].shape}-${computer[1].numder}.jpg')`;

function start(){
  shuffle(deck);
  computer = shuffle(deck);
  costomer = shuffle(deck);
  

  costomerDeck.children[0].style.backgroundImage = `url('/img/card-${costomer[0].shape}-${costomer[0].numder}.jpg')`;
  costomerDeck.children[1].style.backgroundImage = `url('/img/card-${costomer[1].shape}-${costomer[1].numder}.jpg')`;
  
  computerDeck.children[0].style.backgroundImage = `url('/img/card-${computer[0].shape}-${computer[0].numder}.jpg')`;
  computerDeck.children[1].style.backgroundImage = `url('/img/card-${computer[1].shape}-${computer[1].numder}.jpg')`;
}

// 카드 만들기
function creative(){
  for(let i=0; i < shape.length; i++){
    for(let j=0; j < numder.length; j++){
      let count = parseInt(numder[j]);
      if(numder[j] === 'j' || numder[j] === 'q' || numder[j] === 'k'){
        count = 10;
      }
      if(numder[j] === 'a'){
        count = 1 || 10;
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
// computer = shuffle(deck);
// costomer = shuffle(deck);


// 카드 추가
function cardAdd() {
  cos_td_card = document.createElement('td');
  com_td_card = document.createElement('td');
  cos_td_card.classList.add('open');
  com_td_card.classList.add('open');
  computerDeck.appendChild(com_td_card);
  costomerDeck.appendChild(cos_td_card);

  let cosCardAdd = shuffle(deck).pop();
  let comCardAdd = shuffle(deck).pop();
  computer.push(comCardAdd);
  costomer.push(cosCardAdd);
  // console.log(computer);
  // console.log(costomer);
  // console.log(comCardAdd);
}

// 카드 지우기
function cardDel(){
  let classOpen = document.querySelectorAll('.open');
  console.log(classOpen);
  if(costomerDeck.hasChildNodes){
    console.log('?')
    for(let i = 0; i< hitCilck; i++){
      computerDeck.removeChild(computerDeck.lastChild);
      costomerDeck.removeChild(costomerDeck.lastChild);
    }
    hitCilck = 0;
  }
}

// 총점 계산
// let computerTotal = getTotal(computer);
// let costomerTotal = getTotal(costomer);

function getTotal(hand){
  let total = 0;
  for(let i=0;i< hand.length; i++){
    total += hand[i].count;
  }
  return total;
}


// hit 누를때
let hitCilck = 0;
btnHit.addEventListener('click',()=>{
  // if()
  if(computerDeck.children.length < 5){
    cardAdd();
  }
  hitCilck ++;
  // console.log(hitCilck);
  // console.log(costomerDeck);
  // console.log(computerDeck.children.length);
  
  for(let r = 0; r < costomerDeck.children.length ; r++){
    // console.log(r);
    // co[r].style.backgroundImage = `url('/img/card-${co[r].shape}-${co[r].numder}.jpg')`
    costomerDeck.children[r].style.backgroundImage = `url('/img/card-${costomer[r].shape}-${costomer[r].numder}.jpg')`
    computerDeck.children[r].style.backgroundImage = `url('/img/card-${computer[r].shape}-${computer[r].numder}.jpg')`
  }
  
  // 카드 갯수 --
  countCard = countCard - 2;
  backCount.textContent = countCard;
  if(countCard < 0){
    countCard = 0;
    backCount.textContent = countCard;
}
  return hitCilck;
});

// stay 누를때
btnStay.addEventListener('click',()=>{
  // total 계산 
  // 결과 송출
  // 카드 추가까지 총점 계산
  let computerTotal = getTotal(computer);
  let costomerTotal = getTotal(costomer);
  console.log(computerTotal);
  console.log(costomerTotal);
  // 만약 내가 21 넘으면 졌다고 떠야함
  if(costomerTotal < 22 && costomerTotal > computerTotal){
    console.log('너 이김');
    result = '내가 이김'
  }
  else if(computerTotal < 22 && costomerTotal < computerTotal){
    console.log('컴퓨터가 이김');
    result = '컴퓨터 이김'
  }
  else{
    result = '다 짐'
  }
  comTxt.innerText = `컴퓨터 점수 -> ${computerTotal}`;
  cosTxt.innerText = `내 점수 -> ${costomerTotal}`;
  resultTxt.innerText = `결과 => ${result}`;
})

// start 누를때
btnStart.addEventListener('click',()=>{
  cardDel();
  // 카드 갯수 리셋
  countCard = 48;
  backCount.textContent = countCard;
  comTxt.innerText = '';
  cosTxt.innerText = '';
  resultTxt.innerText = '';
  start();
})