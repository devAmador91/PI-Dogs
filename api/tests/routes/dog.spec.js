/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, sequelize } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

describe('Dogs routes', () => {
  before(() => sequelize.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('GET /dogs', () => {
    it('should get 200',() =>
       agent.get('/dogs').expect(200)
    );
  });

  describe('GET /dogs?nameQuery=pug', () => {
    it('should get 200', () =>
       agent.get('/dogs?nameQuery=Akbash Dog').expect(200)
    );
  });

  describe('POST /dog', () => {
    it('should get 200', () =>
       agent.post('/dog').send({
      "name": "pitbull",
      "weight":"48",
      "height": "98",
      "yearsLife": "15",
      "temperament":["Bubbly"],
      "img": "https://wikifaunia.com/images/thumb/1/18/Leon.jpg/345px-Leon.jpg"}).expect(200)
    );
  });
});
