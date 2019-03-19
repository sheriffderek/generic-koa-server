export default {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Things', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      first: {
        type: Sequelize.STRING
      },
      last: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      }
    });
    /*
      Add altering commands here.
      Await any promises to handle asynchronicity.

      Example:
      return  await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Things');

    /*
      Add reverting commands here.
      Await any promises to handle asynchronicity.

      Example:
      return  await queryInterface.dropTable('users');
    */
  }
};
