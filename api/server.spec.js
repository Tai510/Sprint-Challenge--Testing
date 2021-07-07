const request = require('supertest');

const server = require('./server.js');

describe('server', () =>{
describe('GET /', () => {
    it('should return 200 OK', () => {
    return request(server)
    .get('/') 
    .then(res => {
    expect(200)
        });
    });
});

    it('responds with 200 OK ', async () => {
    const res = await request(server)
    .get('/')
    expect(res.status)
    .toBe(200)
})

    it('should return JSON', async () => {
    const res = await request(server)
    .get('/')
    expect(res.type)
    .toBe('application/json')
})

    it('should return {api: running}', async () => {
    const res = await request(server)
    .get('/')
    expect(res.body)
    .toEqual({ api: 'running' })
})

});

describe("POST [/games]", () => {
    it("should return status 422 if request is missing required fields", async () => {
    const res = await request(server)
    .post("/games")
    .send({ title: "" });
    expect(res.status).toBe(422);
  });

  it("should return with an id", async () => {
    const game = {
    title: "Halo",
    genre: "First-person Shooter",
    releaseYear: "2001"
    };
});
});