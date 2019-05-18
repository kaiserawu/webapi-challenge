const express = require('express');
const router = express.Router();

const db = require('../data/helpers/actionModel');

router.get('/', async (req, res) => {
  try {
    const data = await db.get();

    res.json(data);
  } catch(err) {
    res.status(500).send(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const actionId = req.params.id;
    const data = await db.get(actionId);

    res.json(data);
  } catch(err) {
    if (err instanceof TypeError) {
      res.status(404).json({ message: 'Error that ID was not found.' });
    } else {
      res.status(500).json(err);
    }
  }
})

module.exports = router;