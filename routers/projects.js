const express = require('express');
const router = express.Router();

const db = require('../data/helpers/projectModel');

router.get('/', async (req, res) => {
  try {
    const data = await db.get();
    res.send(data);
  } catch(err) {
    res.status(500).send(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const data = await db.get(projectId);

    if (data === null) {
      res.status(404).json({ message: 'Error, that ID was not found.' });
    } else {
      res.json(data);
    }

  } catch(err) {
    res.status(500).send(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const postData = req.body;
    const returnedData = await db.insert(postData);

    res.status(201).send(returnedData);
  } catch(err) {
    res.status(500).send(err);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const putData = req.body;
    const updatedData = await db.update(projectId, putData);
    
    if (updatedData === null) {
      res.status(404).json({ message: 'Error, that ID was not found.' });
    } else {
      res.json(updatedData);
    }
  } catch(err) {
    res.status(500).send(err);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const deletedData = await db.remove(projectId);
    
    res.json(deletedData);
  } catch(err) {
    res.status(500).send(err);
  }
})

module.exports = router;