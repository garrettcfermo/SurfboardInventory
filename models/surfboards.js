module.exports = (sequelize, DataTypes) => {
  return sequelize.define('surfboards', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  })
}