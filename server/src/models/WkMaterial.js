module.exports = (sequelize, DataTypes) => {
  const WkMaterial = sequelize.define('WkMaterial', {
    MaterialNum: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false,
      validation: {
        len: {  // standard valication rule
          arg: [8-15],
          msg: 'Material Number must be between 8 - 15 characters'
        },
        startsWithNumber: function (bodyVal) { // custom valication rule
          let first = bodyVal.charAt(0)
          if (!(first === first.isInteger())) {
            throw new Error ('First letter must be numeric')
          }
        }
      }
    },
    PreparedBy: {
      type: DataTypes.STRING,
      required: true
    },
    Description: DataTypes.STRING,
    BusinessUnit: DataTypes.STRING,
    AlloyCode: {
      type: DataTypes.STRING,
      required: true
    },
    HardnessCode: {
      type: DataTypes.STRING,
      required: true
    },
    DimensionNum: {
      type: DataTypes.STRING,
      required: true
    },
    ToleT: DataTypes.STRING,
    ToleTneg: DataTypes.STRING,
    ToleT0: DataTypes.STRING,
    ToleT0neg: DataTypes.STRING,
    ToleW: DataTypes.STRING,
    ToleWneg: DataTypes.STRING,
    LengthCode: DataTypes.STRING,
    ToleL: DataTypes.STRING,
    ToleLneg: DataTypes.STRING,
    Options: DataTypes.STRING,
    CustMatNum: DataTypes.STRING,
    AlloyCat: {
      type: DataTypes.STRING,
      required: true
    },
    RevRemarks: DataTypes.TEXT,
    PreparedDate: {
      type: DataTypes.STRING,
      required: true
    },
    AreaCode: {
      type: DataTypes.STRING,
      required: true
    },
    WithImage: DataTypes.STRING,
    RejectBy:DataTypes.STRING,
    RejectDate: DataTypes.DATE,
    RejectReason: DataTypes.STRING,
    NewOrRev: {
      type: DataTypes.STRING,
      required: true
    },
    Remarks: DataTypes.TEXT,
  })

  WkMaterial.associate = function (models) {
  }

  return WkMaterial
}