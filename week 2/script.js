let data = [];

document.getElementById("addButton").addEventListener("click", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const bank = document.getElementById("bank").value;
  const amount = document.getElementById("amount").value;

  data.push({ name, bank, amount });

  renderTable();
  calculateTotalAmount();

  document.getElementById("name").value = "";
  document.getElementById("bank").value = "";
  document.getElementById("amount").value = "";
});

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
    const row = document.createElement("tr");

    const indexCell = createTableCell(index + 1);
    const nameCell = createTableCell(item.name);
    const bankCell = createTableCell(item.bank);
    const amountCell = createTableCell(item.amount);
   

    appendCellsToRow(row, [indexCell, nameCell, bankCell, amountCell]);
    tableBody.appendChild(row);
  });
}

function createTableCell(content) {
  const cell = document.createElement("td");
  cell.textContent = content;
  return cell;
}

function appendCellsToRow(row, cells) {
  cells.forEach(cell => {
    row.appendChild(cell);
  });
}

function calculateTotalAmount() {
  const totalAmount = data.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}

function convertToDollars() {
  const exchangeRate = "81.91"; 
  data = data.map(item => {
    return {
      item,
      amount: (parseFloat(item.amount) / exchangeRate).toFixed(2)
    };
  });
  renderTable();
  calculateTotalAmount();
}




