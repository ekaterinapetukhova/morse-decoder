var _ = require("lodash");

const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
const values = {
  10: ".",
  11: "-",
  "**********": " ",
};

function decode(expr) {
  const arr = Array.from(expr);
  const subArrs = _.chunk(arr, 10);
  let result = "";
  let text = "";

  for (let i = 0; i < subArrs.length; i++) {
    let subArr = subArrs[i];
    let str = subArr.join("").split("00").join("").split("********").join("");
    let syms = "";
    let sym;

    if (str === "**") {
      syms = values["**********"];
    } else {
      let subStrs = _.chunk(str, 2);

      for (let j = 0; j < subStrs.length; j++) {
        let subStr = subStrs[j].join("");

        if (subStr == "11") {
          sym = values[11];
        } else if (subStr == "10") {
          sym = values[10];
        }
        syms = `${syms}${sym}`;
      }
      syms = MORSE_TABLE[syms];
    }

    text = `${text}${syms}`;
  }

  result = `${result}${text}`;

  return result;
}

module.exports = {
  decode,
};
