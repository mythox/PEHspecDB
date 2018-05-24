module.exports = (sequelize, DataTypes) => {
  const Length = sequelize.define('Length', {
    LengthCode: {
      type: DataTypes.CHAR,
      unique: true,
      primaryKey: true
    },
    Length: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    LengthOrPlating: DataTypes.CHAR,
    LastChangeDate: {
      type: DataTypes.DATE,
      required: true
    }
  })

  Length.associate = function (models) {
  }

  return Length
}
