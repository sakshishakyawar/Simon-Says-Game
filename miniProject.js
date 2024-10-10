let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameFlash(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
}

let allBtn = document.querySelectorAll(".button");

function btnPress() {
  //console.log(this);to detect which button was pressed
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!Your Score Was <b>${level}</b> <br> Press any Key to Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function reset() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}
