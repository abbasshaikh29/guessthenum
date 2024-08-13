const randomnum = Math.floor(Math.random() * 10);
console.log(randomnum);
const divas = document.querySelector(".message");
const fast = document.getElementById("button");
const fastt = document.getElementById("button2");
let inputnumber = document.getElementById("numberentered");
let newdiv = null;
let currentele = null;
let playgame = true;
let msg = [];
if (playgame) {
  fast.addEventListener("click", () => {
    let inputval = parseInt(inputnumber.value);
    console.log(inputval);

    validate(inputval);
    console.log("clicked");
  });
}

function validate(inputval) {
  if (isNaN(inputval)) {
    console.log(congo(`please enter only number `));
  } else if (inputval > 10 || inputval < 0) {
    console.log(
      congo(`please enter number 
      between 0 and 10 `)
    );
  } else {
    checknumber(inputval);
  }
}
function checknumber(inputval) {
  if (inputval === randomnum) {
    console.log(congo("good job"));
  } else {
    console.log(congo(` ohoo try again`));
  }
}
const congo = (message) => {
  newdiv = document.createElement("h3");
  newdiv.textContent = `${message}`;
  if (currentele) {
    divas.removeChild(currentele);
  }
  divas.appendChild(newdiv);
  currentele = newdiv;
};

const removecheck = () => {
  newdiv.textContent = "";
  inputnumber.value = "";
  currentele = null;
};

fastt.addEventListener("click", function () {
  removecheck();
});
