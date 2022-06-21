const express = require('express');
const app = express();
app.listen(3000,() => {
  console.log('Hello express');
})

app.get('/',(req ,res) => {
  res.json({
    name:'Satria wibowo'
  })
})

