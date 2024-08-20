
    const celsius = prompt("Enter temperature in Celsius:");
    

    if (celsius !== null && !isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = parseFloat(celsius) + 273.15;
        
        console.log("Temperature in Celsius: " + celsius + "°C");
        console.log("Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + "°F");
        console.log("Temperature in Kelvin: " + kelvin.toFixed(2) + "K");
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }

