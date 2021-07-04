const router = require('express').Router();

router.get('/', async (req,res) => {
    res.render('all')
    // res.send("HEllo");
})

module.exports = router;
