const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "fast",
        "website": "fastweb.com"
    };
    res.json(data);
});

module.exports = router;