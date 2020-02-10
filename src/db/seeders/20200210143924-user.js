'use strict';

function generateUsers () {
  const users = [];
  for (let i = 1; i <= 50;) {
    users.push( new Object( {
      firstName: `Name${i}`,
      lastName: `Surname${i}`,
      email: `test${i}@gmail.com`,
      passwordHash: `${i}passwordHash${i}`,
      profilePicture: `test_profilePicture${++i}`,
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
    return queryInterface.bulkDelete('Users',null,{})
  }
};
