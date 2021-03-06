'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('AuthenticityTokens', 'UserId', { type: Sequelize.INTEGER })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('AuthenticityTokens', 'UserId')
  }
};
