﻿let currentBalance = 0;
let expenses = 0;
let monthlyHistory = [];

function updateBalance() {
  document.getElementById("currentBalance").innerText = `R$ ${currentBalance.toFixed(2)}`;
  document.getElementById("expenses").innerText = `R$ ${expenses.toFixed(2)}`;
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
  expenses += expense;

  const monthYear = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  monthlyHistory.push({ monthYear, income, expense });
  
  updateBalance();
  showMonthlyHistory();

  document.getElementById("income").value = "";
  document.getElementById("expense").value = "";
}

function showMonthlyHistory() {
  const historyElement = document.getElementById("monthlyHistory");
  historyElement.innerHTML = monthlyHistory.map(item => `
    <p><strong>${item.monthYear}</strong>: Receita: R$ ${item.income.toFixed(2)} | Despesa: R$ ${item.expense.toFixed(2)}</p>
  `).join('');
}

function showOtherMonths() {
  alert("Aqui você pode adicionar gastos de outros meses!");
}

