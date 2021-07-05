const router = require('express').Router();

router.get('/', async (req,res) => {
    res.render('all')
    // res.send("HEllo");
})

router.get('/gallery', async (req,res) => {
    res.render('gallery')
    // res.send("HEllo");
})

module.exports = router;
