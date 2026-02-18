// Select elements
const form = document.querySelector("form");
const output = document.getElementById("output");

// Total expense
let total = 0;

// Show Live Time
setInterval(() => {
    const now = new Date();
    document.getElementById("time").innerText =
        "Time: " + now.toLocaleTimeString();
}, 1000);

// Show Saved Data on Load
const savedData = localStorage.getItem("hackData");
if (savedData) {
    output.innerText = "Previous Data: " + savedData;
}

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("input[type='text']").value;
    const value = Number(document.querySelector("input[type='number']").value);

    // Save Data
    localStorage.setItem("hackData", name + " - " + value);

    // Add Expense
    total += value;

    // Recommendation
    let advice = "";
    if (total > 5000) {
        advice = "⚠️ You are overspending. Try to save!";
    } else {
        advice = "✅ Good job! Balanced spending.";
    }

    // Status Check
    let status = value >= 40 ? "PASS ✅" : "FAIL ❌";

    // Final Output
    output.innerHTML = `
        Name: ${name} <br>
        Last Value: ₹${value} <br>
        Total: ₹${total} <br>
        Status: ${status} <br>
        Advice: ${advice}
    `;

    // Clear form
    form.reset();
});
