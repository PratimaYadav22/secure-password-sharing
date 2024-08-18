'use strict';
import { Sequelize, Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserPassword, {foreignKey: 'ownerUserId'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Please write valid email address"
        }
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 200],
            msg: "Password must be between 8 characters to 200 characters"
          }
        }
    },
    encryption_key: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 200],
          msg: "Encryption key must be between 8 characters to 200 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};