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

