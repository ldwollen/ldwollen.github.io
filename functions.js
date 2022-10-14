//This file contains code that fills the middle rows of the art table, some calculated and some pulled from an array. This code was based on what we went over in class, following Logan's code and designs
//The first function is for calculating a price, and the second fills the rows of the table by pulling values from the js array, and calcuaitng tax and totals based off of the user's input in the alert box
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {

  let tax = prompt("Please enter the tax?", "0.10");
  let shipMinimum = prompt("Please enter the shipping threshold?", "300");

  var subtotal = 0;
  let table = document.getElementsByClassName("art_Table")[0];

  let i = 0;
  while (i < cart.length) {
    let row = table.insertRow(i + 1); 

    let cell0 = row.insertCell(0); 
    let cell1 = row.insertCell(1); 
    let cell2 = row.insertCell(2); 
    let cell3 = row.insertCell(3); 
    let cell4 = row.insertCell(4); 

    let quantity = cart[i].quantity;
    let price = cart[i].product.price.toFixed(2);
    let curTotal = calculateTotal(quantity, price).toFixed(2);
    subtotal += parseFloat(curTotal);

    cell0.innerHTML = "<img src = '../" + cart[i].product.filename + "'>"; 
    cell1.innerHTML = cart[i].product.title; 
    cell2.innerHTML = quantity; 
    cell3.innerHTML = "$" + price; 
    cell4.innerHTML = "$" + curTotal; 
    i++;

    cell0.style.width = "140px";
    cell2.style.textAlign = "center";
    cell3.style.textAlign = "center";
    cell4.style.textAlign = "right";
  }

  let shipping = subtotal < shipMinimum ? 40 : 0;

  let totals = document.getElementsByClassName("totals");
  totals[0].getElementsByTagName("td")[1].innerHTML = "$" + subtotal.toFixed(2);
  totals[1].getElementsByTagName("td")[1].innerHTML =
    "$" + (subtotal * tax).toFixed(2);
  totals[2].getElementsByTagName("td")[1].innerHTML = "$" + shipping.toFixed(2);
  totals[3].getElementsByTagName("td")[1].innerHTML =
    "$" + parseFloat(subtotal + subtotal * tax + shipping).toFixed(2);
}

outputCartRow();
