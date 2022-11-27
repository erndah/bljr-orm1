const User = require("../models/User.js");

//Get all product
module.exports.getUsers = (req, res) => {
    User.findAll()
        .then(result => {
            res.send(result)
        })
        .catch((err) => console.error(err))
}

//get product by id
module.exports.getUserById = (req, res) => {
    User.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(result => res.send(result[0]))
        .catch((err) => console.error(err))
}

//create new product
module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(result =>{
            res.status(200).json({
                message: "User Created",
                data: result
            })
        })
        .catch((err) => console.error(err))
}

//update product by id
module.exports.updateUser = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).json({
                message: "User Updated",
                data: result + " data berhasil diUpdate"
            })
        })
}

//deleteproduct by id
module.exports.deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).json({
                message: "User Deleted"
            })
        })
        .catch((err) => console.error(err))
}