// Import stylesheets
import "./style.css";

const appDiv = document.getElementById("app");
appDiv.innerHTML = Solution("coders have no life");

// Reverse string with built-in functions
function Solution(str) {
  let newString = "";
  let len = str.length;

  for (let i = len - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// Reverse a string with for Loop
function Solution(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Reverse a string by using stack method push and pop
function Solution(str) {
  let stack = [];
  let len = str.length;
  // push() letter in the stack
  for (let i = 0; i < len; i++) {
    stack.push(str[i]);
  }
  // push() letter from the stack
  let reverseString = "";
  while (stack.length > 0) {
    reverseString += stack.pop();
  }
  return reverseString;
}

// Reverse a string with Recursion Method
function Solution(str) {
  if (str === "") {
    return "";
  } else {
    return Solution(str.substr(1)) + str.charAt();
  }
}

//Test cases
// Solution("coders") return "sredoc"
// Solution("have no life") return "efil on evah"
// Solution("coders have no life") return "efil on evah sredoc”
