/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//dice queries
const dice1 = document.querySelector('#d6-roll')
const dice2 = document.querySelector('#double-d6-roll-1')
const dice3 = document.querySelector('#double-d6-roll-2')
const dice4 = document.querySelector('#d12-roll')
const dice5 = document.querySelector('#d20-roll')

//dice images 
const img1 = dice1.src = './images/start/d6.png'
const img2 = dice2.src = './images/start/d6.png'
const img3 = dice3.src = './images/start/d6.png'
const img4 = dice4.src = './images/start/d12.jpeg'
const img5 = dice5.src = './images/start/d20.jpg'

//Math queries
const d6Mean = document.querySelector('#d6-rolls-mean')
const d6Median = document.querySelector('#d6-rolls-median')
const d6Mode = document.querySelector('#d6-rolls-mode')
const doubleD6Mean = document.querySelector('#double-d6-rolls-mean')
const doubleD6Median = document.querySelector('#double-d6-rolls-median')
const doubleD6Mode = document.querySelector('#double-d6-rolls-mode')
const d12Mean = document.querySelector('#d12-rolls-mean')
const d12Median = document.querySelector('#d12-rolls-median')
const d12Mode = document.querySelector('#d12-rolls-mode')
const d20Mean = document.querySelector('#d20-rolls-mean')
const d20Median = document.querySelector('#d20-rolls-median')
const d20Mode = document.querySelector('#d20-rolls-mode')

const resetBtn = document.querySelector('#reset-button')
resetAll()
/*******************
 * EVENT LISTENERS *
 *******************/
dice1.addEventListener('click', dice1Roll)
dice2.addEventListener('click', dice2and3Roll)
dice3.addEventListener('click', dice2and3Roll)
dice4.addEventListener('click', dice4Roll)
dice5.addEventListener('click', dice5Roll)

resetBtn.addEventListener('click', resetAll)
/******************
 * RESET FUNCTION *
 ******************/

function resetAll () {
  sixes = []
  doubleSixes = []
  twelves = []
  twenties = []

  dice1.src = './images/start/d6.png'
  dice2.src = './images/start/d6.png'
  dice3.src = './images/start/d6.png'
  dice4.src = './images/start/d12.jpeg'
  dice5.src = './images/start/d6.png'

  d6Mean.innerText = 'NA'
  d6Median.innerText = 'NA'
  d6Mode.innerText = 'NA'
  doubleD6Mean.innerText = 'NA'
  doubleD6Median.innerText = 'NA'
  doubleD6Mode.innerText = 'NA'
  d12Mean.innerText = 'NA'
  d12Median.innerText = 'NA'
  d12Mode.innerText = 'NA'
  d20Mean.innerText = 'NA'
  d20Median.innerText = 'NA'
  d20Mode.innerText = 'NA'
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
//images helper function
 const d6Images = num => {
  return `./images/d6/${num}.png`
}
const d12AndD20Images = num => {
  return `./images/numbers/${num}.png`
}

function dice1Roll() {
  const roll1 = getRandomNumber(6)
  sixes.push(roll1)
  dice1.src = d6Images(roll1)
  d6Mean.innerText = meanHelper(sixes).toFixed(2)
  d6Median.innerText = medianHelper(sixes).toFixed(2)
  d6Mode.innerText = modeFinder(doubleSixes).toFixed(2)
  console.log(roll1)
}

function dice2and3Roll() {
  const roll2 = getRandomNumber(6)
  const roll3 = getRandomNumber(6)
  doubleSixes.push(roll2 + roll3)
  dice2.src = d6Images(roll2)
  dice3.src = d6Images(roll3)
  doubleD6Mean.innerText = meanHelper(doubleSixes).toFixed(2)
  doubleD6Median.innerText = medianHelper(doubleSixes).toFixed(2)
  doubleD6Mode.innerText = modeFinder(doubleSixes).toFixed(2)
  console.log(roll2)
  console.log(roll3)
}

function dice4Roll() {
  const roll4 = getRandomNumber(12)
  twelves.push(roll4)
  dice4.src = d12AndD20Images(roll4)
  d12Mean.innerText = meanHelper(twelves).toFixed(2)
  d12Median.innerText = medianHelper(twelves).toFixed(2)
  d12Mode.innerText = modeFinder(twelves).toFixed(2)
  console.log(roll4)
}

function dice5Roll() {
  const roll5 = getRandomNumber(20)
  twenties.push(roll5)
  dice5.src = d12AndD20Images(roll5)
  d20Mean.innerText = meanHelper(twenties).toFixed(2)
  d20Median.innerText = medianHelper(twenties).toFixed(2)
  d20Mode.innerText = modeFinder(twenties).toFixed(2)
  console.log(roll5)
}

/****************
 * MATH SECTION *
 ****************/
const meanHelper = num => num.reduce((a,b) => (a + b)) / num.length;

const medianHelper = arr => {
  const middle = Math.floor(arr.length / 2)
  const sortedNums = sortByNumber(arr)
  return sortedNums.length % 2 !==0 ? sortedNums[middle] : (sortedNums[middle -1] + sortedNums[middle]) /2
}

const modeFinder = arr => {
  let resultObj = {}

  arr.forEach(num => {
    
    if (!resultObj[num]) {
      resultObj = 1
    } else {
      resultObj[num]++
    }
  })

  let largestNum = 0;
  let largestValueKey = 0;

  for (let key in resultObj) {
    let value = resultObj[key]
    if (value > largestValueKey) {
      largestNum = value
      largestValueKey = key
    }
  }
  return Number(largestNum)
}