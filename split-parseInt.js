// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  console.log(userInput);

  var a = userInput[0].split(" ");
  console.log(a[0]);
  console.log(a[1]);
  console.log(a[2]);

  var b = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[2]);

  console.log(b);

  //end-here
});
