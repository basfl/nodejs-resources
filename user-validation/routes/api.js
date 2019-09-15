const express = require("express");
const controllers = require("../controller/api");
const { check, body } = require('express-validator/check');
const router = express.Router();
router.get("/", controllers.getIndex);
router.post("/api/signup",
    [
        check("email").isEmail().withMessage('please enter a valid email !'),
        body("password", "please enter only alphabet and number and with at least 5 characters")
            .isLength({ min: 5 })
            .isAlphanumeric(),
        body("confirm").custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("passwords do not match")
            }
            return true;
        }),
    ],
    controllers.postSignup);

module.exports = router;