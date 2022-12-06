
//loan array
let loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 
//sets base values for 3 variables
let loanWithInterest = 0;
let int = 0;
let payments;


function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`; 
}
let saveForm = () => {
  localStorage.setItem(`as06`, JSON.stringify(loans));
}
//loadForm function
let loadForm = () => {
  if(localStorage.getItem(`as06`) != null){
     loans = JSON.parse(localStorage.getItem(`as06`));
    //updateForm function call
     updateForm();
  } else {
     alert(`Error: no saved values`);
  }
}

//loadDoc function to display data
function loadDoc() {
  //first loan year data 
  var defaultYear = loans[0].loan_year;
  $("#loan_year0" + 1).val(defaultYear++);
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest 
    = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).val(loanWithInterest);
    
  // loop to add data to other years
  for(var i=2; i<6; i++) {
    $(`#loan_year0${i}`).val(defaultYear++);
    $(`#loan_year0${i}`).attr("disabled","true");
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    $(`#loan_int0${i}`).val(defaultInterestRate);
    $(`#loan_int0${i}`).attr("disabled","true");
    //calculates new amount including the interest 
    loanWithInterest 
      = (loanWithInterest + defaultLoanAmount) 
      * (1 + defaultInterestRate);
    $("#loan_bal0" + i).val(loanWithInterest);
  } // end: "for" loop
    
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
    updateLoansArray();
  });
} // end: function loadDoc()

function updateLoansArray() {
  //regex values defined to variables
  // regex tester web site: https://www.regexpal.com/
  let yearP = /^(19|20)\d{2}$/;
  let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
  let intP = /^(0|)+(.[0-9]{1,5})?$/;

  let valid = true;
  //checks if it matckes the case above
  if(!yearP.test($(`#loan_year01`).val())){
    valid = false;
    $(`#loan_year01`).css("background-color", "red");
  }
  //checks if it matches the cases above
  for (i = 1; i < 6; i++) {
    if(!amtP.test($(`#loan_amt0${i}`).val())) {
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red");
    } 
  }
  if(!intP.test($(`#loan_int01`).val())) {
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }
  //if there is no errors then fills new data
  if(valid) {
    loans[0].loan_year = parseInt($("#loan_year01").val());
    //for loop to fill years
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
    }
    //for loop to fill amounts
    for(i = 1; i<6; i++){
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
      loans[i-1].loan_amount = amt;
    }
    let rate = parseFloat($("#loan_int01").val());
    //for loop to fill rate
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate;
    }
    //updateForm function call
    updateForm();
    
  } // end: if
  
} // end: function updateLoansArray()
//updateForm function 
let updateForm = () => {
  loanWithInterest = 0;
  let totalAmt = 0;
  //for loop to take data from fields and set to vars
  for(i = 1; i < 6; i++) {
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
    let amt = loans[i - 1].loan_amount;
    $(`#loan_amt0${i}`).val(amt);
    totalAmt += parseFloat(amt);
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
    //uses data read to add to the loan w/ interest field
    loanWithInterest 
      = (loanWithInterest + parseFloat(amt)) 
      * (1 + loans[0].loan_int_rate);
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  }
  int = loanWithInterest - totalAmt;
  $(`#loan_int_accrued`).text(toMoney(int));
  
} // end: function updateForm()
  

//creates a variable for the module and connects to the HTMl through 
//'myApp' which is the name of the container
var app = angular.module('myApp', []);
//the controller is connected as well using the 
//'myCtrl' which is the name of the controllwer in the html
app.controller('myCtrl', function($scope) {
  //the scope variable defines a payments variable
  $scope.payments = [];
  //the scope variable defines a populate function
  $scope.populate = function() {
    //calls the update form function
    updateForm();
    //variables for various placeholders, all building off of each other
    let total = loanWithInterest;
    let iRate = loans[0].loan_int_rate;
    let r = iRate / 12;
    let n = 11;
    //loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    let pay = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12))));
    //for loop to populate payments
    for (let i = 0; i < 10; i++) {
      //subs payment from total and leaves total with new value
      total -= pay 
      //var for interest value using iRate var
      let int = total * (iRate);
      //scope variable updates payments with new
      $scope.payments[i] = {
        //updates the table headers of the payments table using the following 4 
        //names and the ng-repeat method
        "year":loans[4].loan_year + i + 1,
        "payment": toMoney(pay), 
        "amt": toMoney(int),
        "ye": toMoney(total += int)
      }
    }
    //updates the final payment table so there is no more money owed to the bank
    $scope.payments[10] = {
      "year":loans[4].loan_year + 11,
      "payment": toMoney(total),
      "amt": toMoney(0),
      "ye":toMoney(0)
    }
  }
});
