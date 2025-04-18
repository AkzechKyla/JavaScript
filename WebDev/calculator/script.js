function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const resultDisplay = document.getElementById("result");
    const errorDisplay = document.getElementById("error");

    resultDisplay.textContent = "";
    errorDisplay.textContent = "";

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (num1 === "" || num2 === "" || isNaN(a) || isNaN(b)) {
        errorDisplay.textContent = "⚠️ Please enter valid numbers!";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            if (b === 0) {
                errorDisplay.textContent = "🚫 You can't divide by zero!";
                return;
            }
        result = a / b;
        break;
    }

    resultDisplay.textContent = `💖 Result: ${result}`;
}
