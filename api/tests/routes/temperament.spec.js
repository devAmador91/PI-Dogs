const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Temperament, sequelize } = require('../../src/db.js');
//const Temperament = require('../../src/models/Temperament.js');

const agent = session(app);

describe('Temperament routes', () => {
  before(() => sequelize.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Temperament.sync({ force: true }));

  describe('GET /temperaments', () => {
    it('should get 200', () =>
       agent.get('/temperaments')
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body[0].name).to.eql("Stubborn");
      }));

  });

});