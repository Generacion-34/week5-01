const average = require("../functions/average")

/**
 *! 1) Descripcion del test
 *! 2) Ejecucion de la funcion a  testear, con expect y comprobacion del valor retornado con los matchers
 *! 3) Realizar los expects
 
 */

test("Average should return 5", () => {
  expect(average(4.1, 4.2, 4.3)).toBe(4.2)
})

test("Average should return 15", () => {
  expect(average(10, 15, 20)).toBe(15)
})