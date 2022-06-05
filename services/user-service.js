var User = require('../models/User.js')
var {emailValidation,pwdValidation} = require('../services/index-service')
const bcrypt = require("bcrypt");
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({"error message": error});
    }
}

exports.getUserByIdent = async (req, res) => {
    const ident = req.params.ident;
    try {
        const user = await User.findOne({identifier: ident});
        res.status(200).send(user);

    } catch (error) {
        res.status(500).send({"error message": error});
    }
}


exports.addUser = async (req, res) => {
    try {
        let existUserEmail = await User.findOne({emailAddress :req.body.emailAddress});
        let existUserId = await User.findOne({identifier :req.body.identifier});

        if ( !existUserEmail && !existUserId && emailValidation(req.body.emailAddress) && pwdValidation(req.body.password)) {
                  let pass = await bcrypt.hash(req.body.password, 10);
                  let newUser = new User({
                      identifier: req.body.identifier,
                      firstName: req.body.firstName,
                      lastName: req.body.lastName,
                      emailAddress: req.body.emailAddress,
                      password: pass
                  });

                  let result = await newUser.save();
                  res.status(200).send(result);

        } else {
            res.status(500).send("Credentials INVALID ! ")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({"error message": error});
    }
}
exports.deleteUser = async (req, res) => {
    let ident = req.params.ident;
    try {
        let user = await User.deleteOne({ident :ident });
        res.status(200).send("User successfully deleted !");
    } catch (error) {
        res.status(500).send({"error message": error});
    }
}

