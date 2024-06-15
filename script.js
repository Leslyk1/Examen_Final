let displayElement = document.getElementById('display');
let currentInput = '';

// Función para agregar un valor al display
function appendToDisplay(value) {
    if (currentInput === '' && ['+', '-', '*', '/']. includes (value)){
        return;
    }
    currentInput += value;
    updateDisplay();
}

// Función para limpiar el display
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

// Función para calcular el resultado de la expresión en el display
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}


// Función para actualizar el contenido del display
function updateDisplay() {
    displayElement.innerText = currentInput || '0';
}