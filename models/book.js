const createModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    publishDate: DataTypes.DATE
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Author);
  };
  return Book;
};
export default createModel;