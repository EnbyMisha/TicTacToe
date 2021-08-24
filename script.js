const mainContainer = document.getElementById("main-container");
const playSpace = document.getElementById("play-space");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

let player = 1;

const game = setInterval(() => {
  const btns = [
    btn1, btn2, btn3,
    btn4, btn5, btn6,
    btn7, btn8, btn9
  ];

  let result = "";

  for(let i = 0; i < btns.length; i++) {
    if(btns[i].textContent != "") result += btns[i].textContent;
    else result += "-";
  };

  console.log(result);
}, 100)

btn1.addEventListener("click", () => {
  if(player == 1) {
    btn1.textContent = "X";
    btn1.style.backgroundColor = "#3df58a";
    btn1.style.color = "#ffffff";
    btn1.disabled = true;
    player++;
  }else {
    btn1.textContent = "O";
    btn1.style.backgroundColor = "#f54d3d";
    btn1.style.color = "#ffffff";
    btn1.disabled = true;
    player--;
  }
})

btn2.addEventListener("click", () => {
  if(player == 1) {
    btn2.textContent = "X";
    btn2.style.backgroundColor = "#3df58a";
    btn2.style.color = "#ffffff";
    btn2.disabled = true;
    player++;
  }else {
    btn2.textContent = "O";
    btn2.style.backgroundColor = "#f54d3d";
    btn2.style.color = "#ffffff";
    btn2.disabled = true;
    player--;
  }
})

btn3.addEventListener("click", () => {
  if(player == 1) {
    btn3.textContent = "X";
    btn3.style.backgroundColor = "#3df58a";
    btn3.style.color = "#ffffff";
    btn3.disabled = true;
    player++;
  }else {
    btn3.textContent = "O";
    btn3.style.backgroundColor = "#f54d3d";
    btn3.style.color = "#ffffff";
    btn3.disabled = true;
    player--;
  }
})

btn4.addEventListener("click", () => {
  if(player == 1) {
    btn4.textContent = "X";
    btn4.style.backgroundColor = "#3df58a";
    btn4.style.color = "#ffffff";
    btn4.disabled = true;
    player++;
  }else {
    btn4.textContent = "O";
    btn4.style.backgroundColor = "#f54d3d";
    btn4.style.color = "#ffffff";
    btn4.disabled = true;
    player--;
  }
})

btn5.addEventListener("click", () => {
  if(player == 1) {
    btn5.textContent = "X";
    btn5.style.backgroundColor = "#3df58a";
    btn5.style.color = "#ffffff";
    btn5.disabled = true;
    player++;
  }else {
    btn5.textContent = "O";
    btn5.style.backgroundColor = "#f54d3d";
    btn5.style.color = "#ffffff";
    btn5.disabled = true;
    player--;
  }
})

btn6.addEventListener("click", () => {
  if(player == 1) {
    btn6.textContent = "X";
    btn6.style.backgroundColor = "#3df58a";
    btn6.style.color = "#ffffff";
    btn6.disabled = true;
    player++;
  }else {
    btn6.textContent = "O";
    btn6.style.backgroundColor = "#f54d3d";
    btn6.style.color = "#ffffff";
    btn6.disabled = true;
    player--;
  }
})

btn7.addEventListener("click", () => {
  if(player == 1) {
    btn7.textContent = "X";
    btn7.style.backgroundColor = "#3df58a";
    btn7.style.color = "#ffffff";
    btn7.disabled = true;
    player++;
  }else {
    btn7.textContent = "O";
    btn7.style.backgroundColor = "#f54d3d";
    btn7.style.color = "#ffffff";
    btn7.disabled = true;
    player--;
  }
})

btn8.addEventListener("click", () => {
  if(player == 1) {
    btn8.textContent = "X";
    btn8.style.backgroundColor = "#3df58a";
    btn8.style.color = "#ffffff";
    btn8.disabled = true;
    player++;
  }else {
    btn8.textContent = "O";
    btn8.style.backgroundColor = "#f54d3d";
    btn8.style.color = "#ffffff";
    btn8.disabled = true;
    player--;
  }
})

btn9.addEventListener("click", () => {
  if(player == 1) {
    btn9.textContent = "X";
    btn9.style.backgroundColor = "#3df58a";
    btn9.style.color = "#ffffff";
    btn9.disabled = true;
    player++;
  }else {
    btn9.textContent = "O";
    btn9.style.backgroundColor = "#f54d3d";
    btn9.style.color = "#ffffff";
    btn9.disabled = true;
    player--;
  }
})