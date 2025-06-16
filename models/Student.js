const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define(
  "Student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name cannot be empty" },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Age must be greater than 0",
        },
        isInt: {
          msg: "Age must be an integer",
        },
      },
    },
    m1: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Marks cannot be negative",
        },
      },
    },
    m2: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Marks cannot be negative",
        },
      },
    },
    m3: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Marks cannot be negative",
        },
      },
    },
    m4: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Marks cannot be negative",
        },
      },
    },
    m5: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Marks cannot be negative",
        },
      },
    },
    percentage: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 100,
      },
    },
    division: DataTypes.STRING,
  },
  {
    tableName: "students", // custom table name
    timestamps: true,      // adds createdAt and updatedAt
  }
);

module.exports = Student;
