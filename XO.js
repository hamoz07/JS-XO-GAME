let Turn = "x";
let miniDashboard = document.querySelector(".dashboard");
let squares = Array.from(document.getElementsByClassName("square"));
let sqsContent = [];

function result(num1, num2, num3) {
  miniDashboard.innerHTML = `${sqsContent[num1]} wins`;
  document.getElementById("turnSquare-" + num1).style.background = "#111";
  document.getElementById("turnSquare-" + num2).style.background = "#111";
  document.getElementById("turnSquare-" + num3).style.background = "#111";
  setInterval(() => (miniDashboard.innerHTML += "."), 500);
  setTimeout(() => location.reload(), 2000);
}

function winner() {
  for (let y = 1; y < 10; y++) {
    sqsContent[y] = squares[y - 1].innerHTML;
  }
  console.log(sqsContent);
  if (
    sqsContent[1] == sqsContent[2] &&
    sqsContent[2] == sqsContent[3] &&
    sqsContent[1] !== ""
  ) {
    result(1, 2, 3);
  } else if (
    sqsContent[4] == sqsContent[5] &&
    sqsContent[5] == sqsContent[6] &&
    sqsContent[5] !== ""
  ) {
    result(4, 5, 6);
  } else if (
    sqsContent[7] == sqsContent[8] &&
    sqsContent[8] == sqsContent[9] &&
    sqsContent[8] !== ""
  ) {
    result(7, 8, 9);
  } else if (
    sqsContent[1] == sqsContent[4] &&
    sqsContent[4] == sqsContent[7] &&
    sqsContent[7] !== ""
  ) {
    result(1, 4, 7);
  } else if (
    sqsContent[2] == sqsContent[5] &&
    sqsContent[5] == sqsContent[8] &&
    sqsContent[8] !== ""
  ) {
    result(2, 5, 8);
  } else if (
    sqsContent[3] == sqsContent[6] &&
    sqsContent[6] == sqsContent[9] &&
    sqsContent[9] !== ""
  ) {
    result(3, 6, 9);
  } else if (
    sqsContent[1] == sqsContent[5] &&
    sqsContent[5] == sqsContent[9] &&
    sqsContent[9] !== ""
  ) {
    result(1, 5, 9);
  } else if (
    sqsContent[3] == sqsContent[5] &&
    sqsContent[5] == sqsContent[7] &&
    sqsContent[7] !== ""
  ) {
    result(3, 5, 7);
  }
}
squares.forEach((sq) => {
  sq.addEventListener("click", (e) => {
    let ele = e.target;

    if (Turn === "x" && ele.innerHTML === "") {
      ele.innerHTML = "X";
      miniDashboard.innerHTML = "o";
      Turn = "o";
    } else if (Turn === "o" && ele.innerHTML === "") {
      ele.innerHTML = "O";
      miniDashboard.innerHTML = "x";
      Turn = "x";
    }

    winner();
  });
});
