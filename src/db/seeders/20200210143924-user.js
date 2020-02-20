'use strict';
const bcrypt = require('bcrypt');
const { SALT_ROUND } = require('../../constants');

const profilePicture = [
  'https://cdn-ep19.pressidium.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg',
  'https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b',
  'https://thumbs.dreamstime.com/z/profile-view-young-beautiful-caucasian-teenage-girl-against-white-background-profile-view-young-beautiful-caucasian-teenage-129805433.jpg',
  'https://evada-images.global.ssl.fastly.net/76d1ea39-a4eb-4270-b9dc-899653415f8f/home-tile-person-3.jpg?width=345&height=345',
  'https://ogletree.com/app/uploads/people/abitbol-alexandre-240x275.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcPJIWv26C8rKNBx_Bp2jrR-0qI86_M6RNna9l1EnN2mANVnBS',
  'https://cdn1.iconfinder.com/data/icons/ui-5/502/profile-512.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCtHoqN86sYdTMz__9tLAW5Xv5pQONMW3u2JpiSVTEVodAeW0u',
  'https://media1-production-mightynetworks.imgix.net/asset/2422215/basadur-profile-big.jpg?ixlib=rails-0.3.0&fm=jpg&q=75&auto=format',
  'https://www.mckinsey.com/~/media/McKinsey/Careers%20REDESIGN/Meet%20our%20People/Main/ling-xiao_quote-profile_1132x1224.ashx?mw=1536&car=48:59&cpx=Left&cpy=Top',
];
const firstNames = [
  'Lucas',
  'Arthur',
  'Dmitriy',
  'Vladimir',
  'Oleksandra',
  'Svetlana',
  'Tatyana',
  'Max',
  'John',
  'Bob'];
const lastNames = [
  'Dhoe',
  'Daliber',
  'Heisenberg',
  'Shredinger',
  'Irizue',
  'Poe',
  'Lovecraft',
  'Filipcraft',
  'Inrices',
  'Dolores'
];

function generateUsers () {
  const users = [];
  for (let i = 1; i <= 500;i++) {
    users.push(new Object({
                            firstName: firstNames[Math.floor(
                              Math.random() * firstNames.length)],
                            lastName: lastNames[Math.floor(
                              Math.random() * lastNames.length)],
                            email: `test${i}@gmail.com`,
                            passwordHash: bcrypt.hashSync('paSSword123',
                                                          bcrypt.genSaltSync(SALT_ROUND)),
                            profilePicture: profilePicture[Math.floor(
                              Math.random() * profilePicture.length + 1)],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                          }))
    ;
  }
  return users;

}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', generateUsers(), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
