// A ROUTER!!!!


//GET route

// POST route

// DELETE route
router.delete('/:id', (req, res) => {
    console.log('DELETE /api/shopping-list/:id received a request!')

    const sqlText = `
          DELETE FROM "shoppingList"
              WHERE id = $1;
      `;
    const sqlValues = [req.params.id];

    pool
        .query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            res.sendStatus(500);
        });
})

// PUT route
router.put('/:id', (req, res) => {
    console.log('PUT /api/shopping-list/:id received a request!');

    const sqlText = `
      UPDATE "shoppinglist"
        SET "name" = $1, "quantity" = $2, "unit" = $3
        WHERE "id" = $4;
    `
    const sqlValues = [req.body.name, req.body.quantity, req.body.unit, req.params.id]

    pool
        .query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('Database error in PUT /api/shopping-list/:id', dbErr);
            res.sendStatus(500);
        })
})
