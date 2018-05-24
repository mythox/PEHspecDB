module.exports = (sequelize, DataTypes) => {
  const Hardness = sequelize.define('Hardness', {
    HardnessCode: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    Hardness: {
      type: DataTypes.STRING,
      required: true
    },
    LastChangeDate: {
      type: DataTypes.DATE,
      required: true
    }
  })

  Hardness.associate = function (models) {
  }

  return Hardness
}
