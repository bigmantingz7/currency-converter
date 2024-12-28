import {data, getCurrencyNames} from './currencyConverterModel.js';

// console.log(data);

// the list of currency names 
const keys = getCurrencyNames(data);
// console.log(selectors[0].value);

// console.log(keys);

function createSelectElementOptions(keys) {
    
    let options = '';
 
    keys.forEach((currency) => {
        options += `<option value="${currency}">${currency}</option>\n`;
    });
    
    return options;
}

function calculateConversion(currencyFrom, currencyTo, quantity) {

    const rateFrom = data[currencyFrom];
    const rateTo = data[currencyTo];
    console.log(rateFrom + ", " + rateTo);
    return rateTo*quantity/rateFrom;
}

function renderCurrencySelector(keys) {
    keys.sort();

    // getting the select html elements
    const selectElements = document.querySelectorAll('.js-currencies');
    // console.log(selectElements);
    selectElements.forEach((selectElement) => {
        selectElement.innerHTML = createSelectElementOptions(keys);
    });
}

function roundAndFormat(calculation) {
    return Math.round(calculation *100) / 100;
}

const convertButton = document.getElementById('convert-button');
// console.log(convertButton);

convertButton.addEventListener('click', () => {
    
    const currencyFrom = document.querySelector('.js-currency-from').value;
    const currencyTo = document.querySelector('.js-currency-to').value;
    const quantity = document.getElementById('quantity').value;

    console.log(currencyFrom);
    console.log(currencyTo);
    console.log(quantity);


    const result = calculateConversion(currencyFrom, currencyTo, Number(quantity));

    document.getElementById('output-text').innerText = `${roundAndFormat(result)} ${currencyTo}`;
});

const swapButton = document.getElementById('swap-button');

swapButton.addEventListener('click', () => {
    const currencyFrom = document.querySelector('.js-currency-from').value;
    const currencyTo = document.querySelector('.js-currency-to').value;

    document.querySelector('.js-currency-from').value = currencyTo;
    document.querySelector('.js-currency-to').value = currencyFrom;
});


renderCurrencySelector(keys);