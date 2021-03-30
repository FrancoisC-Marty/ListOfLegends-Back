const express = require('express');
const router = express.Router();

const championCtrl = require('../controllers/champion');

router.post('/', championCtrl.createChampion);
router.get('/', championCtrl.findAllChampions);

module.exports = router;
