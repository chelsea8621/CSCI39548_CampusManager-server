const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "/static/default-student.jpeg"
  },

  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    defaultValue: 4.0,
    validate: {
      max: 4.0,
      min: 0.0,
    }
  }
});

module.exports = Student;