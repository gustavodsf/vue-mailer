let mailer = require("../../config/mailer");

exports.registerNewUser = async (req, res) => {
    try {
        mailer.welcomeMail(req.body.email, req.body.name)
        

        res.status(200).json({
            msg: "Welcome Onboard",
            data: "Funfou"
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        res.status(200).json({
            msg: "Welcome Onboard",
            data: []
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}