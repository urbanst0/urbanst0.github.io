function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
    
    // Definir los tipos de cambio para cada moneda
    var exchangeRates = {
        'USD': {
            'EUR': 0.85,  // Dólar Estadounidense a Euro
            'GBP': 0.73,  // Dólar Estadounidense a Libra Esterlina
            'JPY': 109.28,  // Dólar Estadounidense a Yen Japonés
            'AUD': 1.31,  // Dólar Estadounidense a Dólar Australiano
            'CAD': 1.25,  // Dólar Estadounidense a Dólar Canadiense
            'CHF': 0.92,  // Dólar Estadounidense a Franco Suizo
            'CNY': 6.45,  // Dólar Estadounidense a Yuan Chino
            'INR': 73.33,  // Dólar Estadounidense a Rupia India
            'NZD': 1.39,  // Dólar Estadounidense a Dólar Neozelandés
            'MXN': 20.35  // Dólar Estadounidense a Peso Mexicano
        },
        'EUR': {
            'USD': 1.18,
            'GBP': 0.86,
            'JPY': 129.39,
            'AUD': 1.55,
            'CAD': 1.48,
            'CHF': 1.09,
            'CNY': 7.64,
            'INR': 86.55,
            'NZD': 1.65,
            'MXN': 24.29
        },
        'GBP': {
            // Definir los tipos de cambio para la Libra Esterlina a otras monedas
            // Esto sigue el mismo formato
        },
        // Definir los tipos de cambio para las demás monedas
    };

    // Verificar si la moneda de origen y la moneda de destino están definidas
    if (fromCurrency in exchangeRates && toCurrency in exchangeRates[fromCurrency]) {
        var exchangeRate = exchangeRates[fromCurrency][toCurrency];
        var convertedAmount = (parseFloat(amount) * exchangeRate).toFixed(2);
        document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' equivale a ' + convertedAmount + ' ' + toCurrency;
    } else {
        // Manejar caso en el que no se encuentre un tipo de cambio válido
        document.getElementById('result').innerHTML = 'Tipo de cambio no disponible para estas monedas.';
    }
}
