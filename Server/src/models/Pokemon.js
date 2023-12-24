const {DataTypes} = require('sequelize');

module.exports = (Database) => {
  Database.define("Pokemon", {
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
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atack:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false
  })
}