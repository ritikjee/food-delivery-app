import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import resturantSchema from './models/resturant.model.js'
dotenv.config()
const app = express()
const port = process.env.PORT

connectDB();

app.get('/getResturant', (req, res) => {
  resturantSchema.find()
    .then(resturants => res.json({ resturants: resturants }))
    .catch(err => res.status(400).json('Error: ' + err))
})

app.post('/addResturant', (req, res) => {
  const name = req.body.name
  const addressLine = req.body.addressLine
  const city = req.body.city
  const state = req.body.state
  const pinCode = req.body.pinCode
  const likes = req.body.likes
  const dislikes = req.body.dislikes
  const followers = req.body.followers
  const openingTime = req.body.openingTime
  const closingTime = req.body.closingTime
  const wholeNightShift = req.body.wholeNightShift
  const foodDelivered = req.body.foodDelivered


  const newResturant = new resturantSchema({
    name,
    addressLine,
    city,
    state,
    pinCode,
    likes,
    dislikes,
    followers,
    openingTime,
    closingTime,
    wholeNightShift,
    foodDelivered,

  })


  newResturant.save()
    .then(() => res.json('Resturant added!'))
    .catch(err => res.status(400).json('Error: ' + err))
}
)

app.get('/getResturant/:id', (req, res) => {
  resturantSchema.findById(req.params.id)
    .then(resturant => res.json(resturant))
    .catch(err => res.status(400).json('Error: ' + err))
}
)

app.delete('/deleteResturant/:id', (req, res) => {
  resturantSchema.findByIdAndDelete(req.params.id)
    .then(() => res.json('Resturant deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
}
)

app.put('/updateResturant/:id', (req, res) => {
  resturantSchema.findById(req.params.id)
    .then(resturant => {
      resturant.name = req.body.name
      resturant.addressLine = req.body.addressLine
      resturant.city = req.body.city
      resturant.state = req.body.state
      resturant.pinCode = req.body.pinCode
      resturant.likes = req.body.likes
      resturant.dislikes = req.body.dislikes
      resturant.followers = req.body.followers
      resturant.openingTime = req.body.openingTime
      resturant.closingTime = req.body.closingTime
      resturant.wholeNightShift = req.body.wholeNightShift
      resturant.foodDelivered = req.body.foodDelivered

      resturant.save()
        .then(() => res.json('Resturant updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
}
)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})