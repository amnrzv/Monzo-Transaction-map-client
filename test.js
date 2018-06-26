const sample = require('./sample-data.json')


data = {
  amounts: [],
  names: [],
  locations: []
}

for (const transaction of sample.transactions) {
  if (transaction.amount < 0 && transaction.settled && transaction.merchant) {
    data.amounts.push(`£ ${(-transaction.amount/100).toFixed(2)}`)
    data.names.push(transaction.merchant.name)
    data.locations.push({lat: transaction.merchant.address.latitude.toFixed(2), lon: transaction.merchant.address.longitude.toFixed(2)})
  }
}

console.log(data)