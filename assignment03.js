//This function takes in two numbers from the input boxes, assigned to variables, and calculates the GCD which is set to a new variable
//this method was found online and implemented with some updates so it fit my code and HTML file
//The answer is set to the value of the last input box 
function calculateGCD() {
  let firstNum = document.getElementById("first_number").value;
  let secondNum = document.getElementById("second_number").value;
  let HCF = 0;
  //method taken from https://www.programiz.com/javascript/examples/lcm
  for (let i = 1; i <= firstNum && i <= secondNum; i++) {
    if( firstNum % i == 0 && secondNum % i == 0) {
        HCF = i;
    }
}
  let LCM = (firstNum * secondNum)/(HCF)
  let GCD = (firstNum * secondNum)/(LCM)
  document.getElementById("GCDanswer").value = GCD;
  
}
//this function sets the input value to a variable, then splits the string at each new character and adds it to a total in a loop
//this total is then output to the last box as the answer
function findSumOfInts() {
  let wholeNum = document.getElementById("integer_input").value;
  let answer = 0;
  let arrNums = wholeNum.split("");
   for (let i = 0; i < arrNums.length; i++) {
    let curNum = parseInt(arrNums[i]);
     answer = answer + curNum;
  }
  
  document.getElementById("sumOutput").value = answer;
}
//this function takes the input from each box and sets it to a string variable
//there are if statements for each one, as according to the parameters of the assignment there must be input in at least the first and last name boxes
//if the statement is true then it sets the variable to a string, and for the non required ones, if it is false the value is just set to an empty string ("")
//a variable for the entire name is set, and each individual variable is connected together into that one which is then outputted to the last input element
function combine_Names() {
  let prefix = "";
  let firstName = "";
  let lastName = "";
  let suffix = "";
  if (document.getElementById("Prefix").value.length == 0) {
    prefix = "";
  } else {
    prefix = document.getElementById("Prefix").value + ".";
  }

  if (document.getElementById("First_Name").value.length == 0) {
    alert("First Name field cannot be empty");
  } else {
    firstName = " " + document.getElementById("First_Name").value;
  }

  if (document.getElementById("Last_Name").value.length == 0) {
    alert("Last Name field cannot be empty");
  } else {
    lastName = " " + document.getElementById("Last_Name").value;
  }
  if (document.getElementById("Suffix").value.length == 0) {
    suffix = "";
  } else {
    suffix = ", " + document.getElementById("Suffix").value;
  }

  let fullName = prefix + firstName + lastName + suffix;
  document.getElementById("full_Name").value = fullName;
  
}
//this code was modeled after a program from this URL https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/
//I coded the function myfunc_new to make it accurate for the assignment, and borrowed the HTML and some of the CSS for formatting. I changed names to make it work. 
//I also edited and implemented the code differently than original to make it a player versus the computer rather than two players.
//I created loops and if statements in my method to check whether a box was checked when a user clicks it. If it wasn't, then the X player (user) added their symbol directly followed by a 0 symbol from the computer in one of the remaining unchecked boxes. Each click calls to my function as well as the base function to check if there is a winner. 

var checker = 0;
var winner;
function myfunc() {
  // Setting DOM to all boxes or input field
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;
  var winner = false;

  // Checking if Player X won or not and after
  // that disabled all the other fields
  if (
    (b1 == "x" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b7 == "x" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b1 == "x" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b3 == "x" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b2 == "x" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player X won");
  } else if (
    (b4 == "x" || b4 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b6 == "x" || b6 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player X won");
  }

  // Checking of Player X finish
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  } else if (
    (b4 == "0" || b4 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b6 == "0" || b6 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winner = true;
    window.alert("Player 0 won");
  }

  // Checking of Player 0 finish
  // Here, Checking about Tie
  
   else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
  
}

// Function to reset game
function myfunc_2() {
  checker = 0;
   document.getElementById('print')
                .innerHTML = "";
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").disabled = false;
  document.getElementById("b6").disabled = false;
  document.getElementById("b7").disabled = false;
  document.getElementById("b8").disabled = false;
  document.getElementById("b9").disabled = false;
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
function myfunc_new() {
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1");
  b2 = document.getElementById("b2");
  b3 = document.getElementById("b3");
  b4 = document.getElementById("b4");
  b5 = document.getElementById("b5");
  b6 = document.getElementById("b6");
  b7 = document.getElementById("b7");
  b8 = document.getElementById("b8");
  b9 = document.getElementById("b9");
  let boxArray = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
  for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener("click", function addValue() {
      if (boxArray[i].disabled == false) {
        boxArray[i].value = "X";
        boxArray[i].disabled = true;
        let tempVar = Math.floor(Math.random() * 9);
        let boolVar = true;
        while (boolVar == true) {
          if (boxArray[tempVar].disabled == false) {
            boxArray[tempVar].value = "0";
            boxArray[tempVar].disabled = true;
            checker++;
            boolVar = false;
          } else {
            boolVar = true;
            tempVar = Math.floor(Math.random() * 9);
          }
        }
        if (checker == 4) {
        for (let j = 0; j < boxArray.length; j++) {
          if (boxArray[j].disabled == false) {
            boxArray[j].value = "X";
            return myfunc();
            break;
          }
        }
      }
      }
    });
  }
}

