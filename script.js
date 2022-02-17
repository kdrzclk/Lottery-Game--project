const input = document.getElementById("number");
let button = document.getElementById("button");
let p = document.querySelectorAll(".parag");
let reset = document.getElementById("reset");
let hr = document.querySelectorAll(".line");

function randomNumber() {
  return Math.floor(Math.random() * 90 + 1);
}

let arrayNumber = [];

button.addEventListener("click", () => {
  let counter = 0;

  while (input.value > counter) {
    while (arrayNumber.length < 6) {
      let insideArray = randomNumber();
      if (arrayNumber.includes(insideArray)) {
        continue;
      } else {
        arrayNumber.push(insideArray);
      }
    }
    arrayNumber.sort((a, b) => a - b);
    while (arrayNumber.length < 7) {
      let insideArray = randomNumber();
      if (arrayNumber.includes(insideArray)) {
        continue;
      } else {
        arrayNumber.push(insideArray);
      }
    }

    arrayNumber.push(randomNumber());
    let text = `${arrayNumber[0]} - ${arrayNumber[1]} - ${arrayNumber[2]} - ${arrayNumber[3]} - ${arrayNumber[4]} - ${arrayNumber[5]} | ${arrayNumber[6]} | ${arrayNumber[7]}`;

    if (input.value > 8) {
      alert("You have to enter between 1 - 8!!!");
      return;
    } else if (input.value <= 0 || input.value == "") {
      alert("You have to enter between 1 - 8!!!");
      return;
    } else {
      p[counter].innerHTML = text;
      hr[counter].style.display = "block";
    }

    counter += 1;
    arrayNumber = [];
  }

  //   if (input.value < 7) {
  //     let x = input.value;
  //     for (; x < 8; x++) {
  //       p[x].innerHTML += "";
  //     }
  //   }
});

reset.addEventListener("click", () => {
  window.location.reload(false);
});
