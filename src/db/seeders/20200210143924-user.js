'use strict';

function generateUsers () {
  const users = [];
  for (let i = 0; i < 50;) {
    users.push( new Object( {
      firstName: 'Test',
      lastName: 'Testovich',
      login: `test_login${++i}`,
      email: `test${i}@gmail.com`,
      passwordHash: bcrypt.hashSync( `password${i}`, bcrypt.genSaltSync( 8 ) ),
      createdAt: new Date(),
      updatedAt: new Date(),
    } ) )
    ;
  }
  return users;

}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'Users', generateUsers(), {} );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
