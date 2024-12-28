
export let data = {};

// gets the rates data from api
async function fetchData() {
    try {
        const response = await fetch('https://api.fxratesapi.com/latest');
        if (response.ok) {
            const json = await response.json();
            data = json.rates;
            return data;
        } else {
            console.log('Response was not ok.');
        }
    } catch (error) {
        console.log(error);
    }
}

data = await fetchData();

export function getCurrencyNames(data) {
    return Object.keys(data);
}

