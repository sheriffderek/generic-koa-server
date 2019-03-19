export default (sequelize, DataTypes)=> {
  const Thing = sequelize.define('Thing', { // automatically maps to the 'Thing' table (in the database)
    first: DataTypes.STRING,
    last: DataTypes.STRING
  });

  return Thing;
}
