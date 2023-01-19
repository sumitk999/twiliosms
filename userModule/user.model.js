// const db = require('../db-config')

const User = db.sequelize.define('user', {
 
  fname: {
    type: db.Sequelize.DataTypes.STRING,
    allowNull: false
  },
  lname: {
    type: db.Sequelize.DataTypes.STRING,
    allowNull:false
  },
  email:{
    type: db.Sequelize.DataTypes.STRING
  }
},{tableName:"users",timestamps:true});

// User.sync({force:true})

module.exports = User