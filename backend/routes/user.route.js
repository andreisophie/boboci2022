const router = require("express").Router();
const User = require("../models/user.model");

// /api/user
router.post("/", (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        console.log(user);

        const duplicateUser = User.findOne({email: user.email});

        console.log(duplicateUser);

        if (duplicateUser) {
            return res.send({
                success: false,
                message: "User with that email already exists!"
            })
        }

        const duplicateUser2 = User.findOne({username: user.username});

        if (duplicateUser2) {
            return res.send({
                success: false,
                message: "User with that username already exists!"
            })
        }

        // User.find() -> returneaza TOTI userii
        // User.findByID(_id) -> returneaza un user cu id-ul _id, daca exista

        user.save();

        return res.send({
            success: true
        })
    } catch (e) {
        return res.send({
            success: false,
            message: "Error: " + e.message
        })
    }
})

module.exports = router;