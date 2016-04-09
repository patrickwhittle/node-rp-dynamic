import 'isomorphic-fetch'
import express from 'express'
import RoomPrice from 'ba-common-interface-js/com/bookassist/model/RoomPrice'

const app = express()

app.get('/', (req, res) => {
  const roomPrice = new RoomPrice()
  roomPrice.get({
      url: `http://rw.bookassist.com/rest/super/102/67/room_price/38746` 
    })
    .then(roomPrice => roomPrice.toObject())
    .then(roomPrice => res.json(roomPrice))
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
