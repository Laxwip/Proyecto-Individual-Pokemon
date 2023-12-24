const {DataTypes} = require('sequelize');

module.exports = (Database) => {
  Database.define("Types", {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
  },{
    timestamps: false
  })
}