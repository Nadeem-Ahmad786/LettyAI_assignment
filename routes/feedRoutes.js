const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feed');

router.post('/', feedController.create);
router.get('/:id', feedController.readSingle)


module.exports = router;