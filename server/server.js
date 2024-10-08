const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shoppingListRouter = require('./routes/shoppingList.router')
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/shopping-list', shoppingListRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});

// /api/shopping-list
