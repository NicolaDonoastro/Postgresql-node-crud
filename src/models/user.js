const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        min: 6,
        max: 25,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        min: 6,
        max: 25,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      // hooks: {
      //   beforeCreate: (user) => {
      //     const salt = bcrypt.genSaltSync();

      //     user.password = bcrypt.hashSync(user.password, salt);
      //   },
      // },
      // instanceMethods: {
      //   validPassword: function (password) {
      //     const user = this;

      //     return bcrypt.compareSync(password, user.password);
      //   },
      // },
    }
  );
  return User;
};
