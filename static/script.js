function convertLength() {
    const value = parseFloat(document.getElementById('lengthValue').value);
    const fromUnit = document.getElementById('lengthFrom').value;
    const toUnit = document.getElementById('lengthTo').value;

    const lengthUnits = {
        'millimeter': 0.001,
        'centimeter': 0.01,
        'meter': 1,
        'kilometer': 1000,
        'inch': 0.0254,
        'foot': 0.3048,
        'yard': 0.9144,
        'mile': 1609.34
    };

    const convertedValue = value * lengthUnits[fromUnit] / lengthUnits[toUnit];
    document.getElementById('lengthResult').innerText = `Converted Value: ${convertedValue}`;
}

function convertWeight() {
    const value = parseFloat(document.getElementById('weightValue').value);
    const fromUnit = document.getElementById('weightFrom').value;
    const toUnit = document.getElementById('weightTo').value;

    const weightUnits = {
        'milligram': 0.001,
        'gram': 1,
        'kilogram': 1000,
        'ounce': 28.3495,
        'pound': 453.592
    };

    const convertedValue = value * weightUnits[fromUnit] / weightUnits[toUnit];
    document.getElementById('weightResult').innerText = `Converted Value: ${convertedValue}`;
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('tempValue').value);
    const fromUnit = document.getElementById('tempFrom').value;
    const toUnit = document.getElementById('tempTo').value;

    let convertedValue;
    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            convertedValue = (value * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            convertedValue = value + 273.15;
        } else {
            convertedValue = value;
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            convertedValue = (value - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            convertedValue = (value - 32) * 5/9 + 273.15;
        } else {
            convertedValue = value;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            convertedValue = value - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            convertedValue = (value - 273.15) * 9/5 + 32;
        } else {
            convertedValue = value;
        }
    }
    
    document.getElementById('tempResult').innerText = `Converted Value: ${convertedValue}`;
}
