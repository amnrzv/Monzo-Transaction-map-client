var data = [{
    type:'scattermapbox',
    lat:['45.5017', '47'],
    lon:['-73.5673', '-75'],
    mode:'markers',
    marker: {
      size:14
    },
    text:['Montreal', 'Rizvi']
  },
  {
    type:'scattermapbox',
    lat:['25.5017', '27'],
    lon:['-13.5673', '-40'],
    mode:'markers',
    marker: {
      size:18
    },
    text:['Something', 'Else']
  }]
  
  var layout = {
    autosize: true,
    hovermode:'closest',
    mapbox: {
      bearing:0,
      center: {
        lat:45,
        lon:-73
      },
      pitch:0,
      zoom:2
    },
  }
  
  Plotly.setPlotConfig({
    mapboxAccessToken: 'pk.eyJ1IjoiYW1ucnp2IiwiYSI6ImNqaW82ZG1paDBrcmszcHB1MWVnam8xOWwifQ.hOT9ly8lAV31UjB7FxwmqA'
  })
  
  Plotly.plot('tester', data, layout)