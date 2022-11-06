
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/food', (req, res) => {
  res.send('your food is here')
  console.log(`${req.ip}KHAA LO KHANA `)
})
app.get('/water', (req, res) => {
    res.send('your water is here')
    console.log(`${req.ip}PAANI BHE LAI LO `)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})