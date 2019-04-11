export default (sequelize, DataTypes)=> {
  const Author = sequelize.define('Author', { // automatically maps to the 'Author' table (in the database)
    first: DataTypes.STRING,
    last: DataTypes.STRING
  });

  Author.associate = function(models) {
    Author.hasMany(models.Book); // has other options too - but defaults are all that is needed here
  };

  return Author;
}
