// document.addEventListener("DOMContentLoaded", function (event) {
//         let scoreEl = document.getElementById("scoreLEFT")
//         console.log(scoreEl)
// });
let score_left = 0
let score_right = 0

let scoreLeftEl = document.getElementById("scoreLEFT")
let scoreRightEl = document.getElementById("scoreRIGHT")

let leftDIV = document.getElementById("divLEFT")
let rightDIV = document.getElementById("divRIGHT")

function winningSide() {
    if (score_left > score_right) {
        leftDIV.setAttribute("class", "winningClass")
        rightDIV.setAttribute("class", "score-left")
    }
    if (score_left == score_right) {
        rightDIV.setAttribute("class", "drawClass")
        leftDIV.setAttribute("class", "drawClass")
    }
    if(score_right > score_left){
        rightDIV.setAttribute("class", "winningClass")
        leftDIV.setAttribute("class", "score-left")
    }
}

function newGame() {
    score_left = 0;
    score_right = 0;
    scoreLeftEl.textContent = score_left
    scoreRightEl.textContent = score_right
    rightDIV.setAttribute("class", "score-left")
    leftDIV.setAttribute("class", "score-left")
}
function incrementLeftOne() {
    score_left += 1
    scoreLeftEl.textContent = score_left
    winningSide()
}
function incrementLeftTwo() {
    score_left += 2
    scoreLeftEl.textContent = score_left
    winningSide()
}
function incrementLeftThree() {
    score_left += 3
    scoreLeftEl.textContent = score_left
    winningSide()
}
function incrementRightOne() {
    score_right += 1
    scoreRightEl.textContent = score_right
    winningSide()
}
function incrementRightTwo() {
    score_right += 2
    scoreRightEl.textContent = score_right
    winningSide()
}
function incrementRightThree() {
    score_right += 3
    scoreRightEl.textContent = score_right
    winningSide()
}