const Sequelize = require('sequelize')
const db = new Sequelize(process.env.Database_URL || 'postgres://localhost/my_acme_departments_db')

const User = db.define('users', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    notNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

const Department = db.define('departments', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    notNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

const syncAndSeed = async() => {
  await db.sync({force: true})
  await User.create({name: "Blake"})
  await Department.create({name: "Engineering"})
}

User.belongsTo(Department)


module.exports = {
  syncAndSeed,
  Models: {
    User,
    Department
  }
}
