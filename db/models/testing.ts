module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID',
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'password',
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        field: 'email',
      },
      roleId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'role',
          key: 'ID',
        },
        field: 'role_id',
      },
    },
    {
      timestamps: false,
      tableName: 'user',
    },
  )
  user.associate = function (models) {
    user.hasOne(models.role, { foreignKey: 'id', sourceKey: 'roleId' })
  }
  return user
}
