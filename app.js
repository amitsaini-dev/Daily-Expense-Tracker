const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalElement = document.getElementById("total");

let total = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("expense-name").value.trim();
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (name && amount > 0) {
        // Create list item
        const li = document.createElement("li");
        li.textContent = `${name}: ₹${amount.toFixed(2)}`;
        expenseList.appendChild(li);

        // Update total
        total += amount;
        totalElement.textContent = total.toFixed(2);

        // Clear inputs & focus back
        form.reset();
        document.getElementById("expense-name").focus();
    } else {
        alert("Please enter valid expense details.");
    }
});
