module.exports = (sequelize, DataTypes) => {
  const AlloyCat = sequelize.define('AlloyCat', {
    AlloyCat: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    AlloyCatDesc: {
      type: DataTypes.STRING,
      required: true
    } 
  })

  AlloyCat.associate = function (models) {
  }

  return AlloyCat
}
