module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    MaterialNum: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
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
    ToleT1: DataTypes.STRING,
    ToleT1neg: DataTypes.STRING,
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
      type: DataTypes.DATE,
      required: true
    },
    AreaCode: DataTypes.STRING,
    WithImage: DataTypes.STRING,
    MSRev: {
      type: DataTypes.STRING,
      required: true
    },
    ApprovedBy: DataTypes.STRING,
    ApprovedDate: DataTypes.DATE,
    EffectiveDate: {
      type: DataTypes.DATE,
      required: true
    },
    Remarks: DataTypes.TEXT,
  })

  Material.associate = function (models) {
  }

  return Material
}