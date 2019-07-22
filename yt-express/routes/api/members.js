const express = require('express');
const members = require('../../members')
const router = express.Router();
router.get("/", (req, res, next) => {
    res.json(members)
})
router.get("/:id", (req, res, next) => {

    res.json(members.filter(member => member.id === parseInt(req.params.id)));
})
module.exports = router