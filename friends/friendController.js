const router = require('express').Router()

const Friend = require('./friendsDb')

router
  .route('/')
    .get((req, res) => {
      Friend
        .find()
        .then(friends =>{
          res.status(200).json(friends)
        })
        .catch(err =>{
          res.status(500).json(err)
        })
  })
  .post((req, res) =>{
    const friendData = req.body;
    const friend = new Friend(friendData)

    friend
      .save()
      .then(friend =>{
        res.status(200).json(friend)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router
    .route("/:id")
      .delete((req, res) => {
        const { id } = req.params

          Friend
            .findByIdAndRemove(id)
            .then(
              res.status(200).json("it works")
            )

      })






module.exports = router;
