const request = require('supertest');
const app = require('../../src/App');

const connection = require('../../src/database/connection');

beforeEach(async () => {
  await connection.migrate.rollback();
  await connection.migrate.latest();
});

afterAll(async () => {
  await connection.destroy();
});

describe('ONG', () => {
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Cães Solitários",
        email: "contato@caessolitarios.com.br",
        whatsapp: 27994569999,
        city: "Vitoria",
        uf: "ES"
      })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})