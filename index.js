const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let charsOfPass = 12;
let generatedElOne = document.getElementById("generatedPasswordOne");
let generatedElTwo = document.getElementById("generatedPasswordTwo");

function generateRandomPassword() {
  let randomPasswordOne = "";
  let randomPasswordTwo = "";

  for (let i = 0; i < charsOfPass; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPasswordOne += characters[randomIndex];
  }

  for (let i = 0; i < charsOfPass; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPasswordTwo += characters[randomIndex];
  }

  generatedElOne.value = randomPasswordOne;
  generatedElTwo.value = randomPasswordTwo;
}
