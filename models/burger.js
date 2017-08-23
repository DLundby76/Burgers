module.exports = (sequelize, DataTypes) =>{
  const Burger = sequelize.define('burger',{
    burgerName: DataTypes.STRING,
    devoured: {
      type: DataTypes.INTEGER,
      defaultVaule: false}
    });
  return Burger;
};
