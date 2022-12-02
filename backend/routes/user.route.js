const User = require("../models/user.model");

const router = require("express").Router();

router.post("/", (req, res) => {
    try {
        const user = new User({
            username:  req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const userDuplicate = User.findOne({username: user.username});
        const userDuplicate2 = User.findOne({email: user.email});

        // Alte functii mongodb:
        // User.find() -> returneaza toti userii
        // User.findById(id) -> returneaza user-ul cu un anumit id primit ca parametru 

        if (userDuplicate || userDuplicate2) {
            return res.send({
                success: false,
                message: "Error: User already exists!"
            });
        }

        user.save();

        return res.send({
            success: true
        });
    } catch (e) {
        return res.send({
            success: false,
            message: "Error: " + e.message
        })
    }
})

module.exports = router;