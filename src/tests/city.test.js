const request = require("supertest")
const app = require('../app')

const BASE_URL = '/api/v1/cities'

const city = {
  name: "Cordoba",
  country: "Argentina",
  isCapital: false
}

let cityId


test("POST 'BASE_URL', should return status code 201 and res.body.name ===  city.name", async () => {
  const res = await request(app)
    .post(BASE_URL)
    .send(city)

  cityId = res.body.id

  expect(res.statusCode).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})

test("GET /cities should return status code 200 and body.length === 0", async () => {

  const res = await request(app)
    .get(BASE_URL)

  expect(res.status).toBe(200)
  // expect(res.body.length).toBe(0)
  expect(res.body).toHaveLength(1)

})

test("GET 'BASE_URL/:id', should status code 200, res.body.name ==== city.name", async () => {
  const res = await request(app)
    .get(`${BASE_URL}/${cityId}`)

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})


test("PUT 'BASE_URL/:id', should return status code 200, and res.body === bodyUpdate.name", async () => {
  const bodyUpdate = {
    name: "Caracas"
  }
  const res = await request(app)
    .put(`${BASE_URL}/${cityId}`)
    .send(bodyUpdate)

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(bodyUpdate.name)
})


test("DELETE 'BASE_URL/cityId', should return 204 ", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${cityId}`)

  expect(res.status).toBe(204)
})