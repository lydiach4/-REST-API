const express = require('express');
const shoeController = require('../controllers/shoeController');

const router = express.Router();

router.post('/shoes', shoeController.addshoe);
router.get('/shoes', shoeController.shoesList);
router.get('/shoes/:id', shoeController.shoe);
router.put('/shoes/:id', shoeController.updateshoe);
router.delete('/shoes/:id', shoeController.deleteshoe);
module.exports = router;