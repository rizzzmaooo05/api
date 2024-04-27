import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('okk')
})

app.listen(6969, () => {
  console.log('server jalan')
})
