const sample = require('./sample-data.json')

let sanitized_data = sample.transactions
    .filter(x => x.settled !== "" && x.amount < 0 && x.merchant)
    .map(x => {
        const { amount, category, merchant: { address: { latitude, longitude, country } } } = x;
        return [
            amount, category, country, latitude, longitude
        ]
    })

console.log(sanitized_data)