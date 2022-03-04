const express = require('express');
const router = express.Router();

router.post('/register');
router.post('/login');

router.get('/babydata');
router.post('/babydata/recipient');

router.post('/orders');

router.post('/chats');

router.post('/delivery/form');
router.put('/delivery');

router.post('/certificate');

module.exports = router;
