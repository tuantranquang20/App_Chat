"use strict";

const Sequelize = require("sequelize");
const Model = Sequelize.Model;
var sequelize = require(__dirname + "/../config/env.js");
class user extends Model {}
user.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    user_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    device_id: {
      type: Sequelize.STRING(300),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    last_login_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    reset_password: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    reset_password_exprice: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    modified_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    is_active: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    login_false_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: "user",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = () => user;
