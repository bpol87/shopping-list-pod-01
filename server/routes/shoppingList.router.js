// A ROUTER!!!!
const express = require('express')
const pool = require('../modules/pool')

const router = express.Router()

// GET /api/students
router.get('/', (req, res) => {
    const sqlText = `
      SELECT * FROM "shoppingList"
        ORDER BY "id";
    `
  
    pool.query(sqlText)
      .then((dbRes) => {
        console.log(`Got stuff from database`, dbRes.rows);
        res.send(dbRes.rows)
      })
      .catch((dbErr) => {
        console.log('GET /api/shopping-list dbErr:', dbErr)
        res.sendStatus(500)
      })
  })

  module.exports = router;