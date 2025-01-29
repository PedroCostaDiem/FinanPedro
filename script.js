let currentBalance = 0;

function updateBalance() {
  const balanceElement = document.getElementById("currentBalance");
  balanceElement.innerText = `R$ ${currentBalance.toFixed(2)}`;
  
  const messageElement = document.getElementById("message");

  if (currentBalance > 0) {
    messageElement.innerText = "Estamos de bouas";
    messageElement.style.color = "green";
  } else if (currentBalance > -100) {
    messageElement.innerText = "Daqui a pouco não resta nada";
    messageElement.style.color = "orange";
  } else {
    messageElement.innerText = "A casa caiu";
    messageElement.style.color = "red";
  }
}

function addTransaction() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  const expense = parseFloat(document.getElementById("expense").value) || 0;

  currentBalance += income;
  currentBalance -= expense;
  
  updateBalance();
  
  document.getElementById("income").value = "";
  document.getElementById("expense").value = "";
}
