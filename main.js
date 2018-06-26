const sample = require('./sample-data.json')

let sanitized_data = {
  amounts: [],
  names: [],
  latitudes: [],
  longitudes: [],
  texts: []
}

for (const transaction of sample.transactions) {
  if (transaction.amount < 0 && transaction.settled && transaction.merchant) {
    let lat = transaction.merchant.address.latitude.toFixed(5)
    let lon = transaction.merchant.address.longitude.toFixed(5)
    if (sanitized_data.latitudes.includes(lat) && sanitized_data.longitudes.includes(lon)) {
      const indexLat = sanitized_data.latitudes.indexOf(lat)
      const indexLon = sanitized_data.longitudes.indexOf(lon)
      
      if (indexLat === indexLon) {
        sanitized_data.amounts[indexLat] += transaction.amount
        sanitized_data.texts[indexLat] = `£${(-sanitized_data.amounts[indexLat]/100).toFixed(2)} spent at ${transaction.merchant.name}`
        continue;
      }
    }
    
    sanitized_data.amounts.push(transaction.amount)
    sanitized_data.names.push(transaction.merchant.name)
    sanitized_data.texts.push(`£${(-transaction.amount/100).toFixed(2)} spent at ${transaction.merchant.name}`)
    sanitized_data.latitudes.push(lat)
    sanitized_data.longitudes.push(lon)
  }
}

console.log(sanitized_data)

var data = [{
    type:'scattermapbox',
    lat:sanitized_data.latitudes,
    lon:sanitized_data.longitudes,
    mode:'markers',
    marker: {
      size:8
    },
    text:sanitized_data.texts
  }]
  
  var layout = {
    autosize: true,
    hovermode:'closest',
    mapbox: {
      bearing:0,
      center: {
        lat:51.5,
        lon:0.5
      },
      pitch:0,
      zoom:6
    },
  }
  
  Plotly.setPlotConfig({
    mapboxAccessToken: 'pk.eyJ1IjoiYW1ucnp2IiwiYSI6ImNqaW82ZG1paDBrcmszcHB1MWVnam8xOWwifQ.hOT9ly8lAV31UjB7FxwmqA'
  })
  
  Plotly.plot('tester', data, layout)