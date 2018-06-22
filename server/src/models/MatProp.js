module.exports = (sequelize, DataTypes) => {
  const MatProp = sequelize.define('MatProp', {
    MSType: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    MSProperty: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    MaterialNum: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    RefNum: {
      type: DataTypes.CHAR,
      required: true
    },
    OptionNum: {
      type: DataTypes.CHAR,
      required: true
    },
    PSType: {
      type: DataTypes.DATE,
      required: true
    }
  },
  {
    timestamps: true,
    freezeTableName: false
  })

  MatProp.associate = (models) => {
    MatProp.hasOne(models.MsProp, {
      foreignKey: 'MSType',
      targetKey: 'MSType',
      as: 'Prop',
      scope: {
        MSProperty: {
          $col: 'MatProp.MSProperty'
        }
      }
    }),
    MatProp.hasOne(models.MsType, {
      foreignKey: 'MSType',
      targetKey: 'MSType',
      as: 'Type'
    }),
    MatProp.hasOne(models.Procurespecitem, {
      foreignKey: 'MSType',
      targetKey: 'MSType',
      as: 'SpecItem',
      scope: {
        MSProperty: {
          $col: 'MatProp.MSProperty'
        },
        RefNum: {
          $col: 'MatProp.RefNum'
        },
        OptionNum: {
          $col: 'MatProp.OptionNum'
        }
      }
    }),
    MatProp.hasOne(models.Procurespecdoc, {
      foreignKey: 'MSType',
      targetKey: 'MSType',
      as: 'SpecDoc',
      scope: {
        MSProperty: {
          $col: 'MatProp.MSProperty'
        },
        RefNum: {
          $col: 'MatProp.RefNum'
        },
        OptionNum: {
          $col: 'MatProp.OptionNum'
        }
      }
    })
  }

  return MatProp
}
