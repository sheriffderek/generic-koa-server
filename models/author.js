export default (sequelize, DataTypes)=> {
  const Author = sequelize.define('Author', { // automatically maps to the 'Author' table (in the database)
    first: DataTypes.STRING,
    last: DataTypes.STRING
  });

  return Author;
}
