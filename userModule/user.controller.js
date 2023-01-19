// const User = require('./user.model')
const {Op} = require('sequelize')
exports.userReg = async (req,res) => {

    const data = req.body
    console.log(data)
    // return data
    const savedData = await User.create(data)
    
    console.log('User', savedData);

    res.send(savedData)

}

exports.getUser = async (req,res) =>{
    const users = await User.findAll({
        attributes:['id','fname','lname'],
        where:{
            id:{
                [Op.or]:[1,3]
            }
        }
    })
    res.send(users)
}

exports.updateUser = async (req,res) =>{
    data  = req.body
    const update = await User.update({})
}