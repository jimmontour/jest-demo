import analysis from './analysis'

test('1,2,3,4', () => {
   expect(analysis([1,2,3,4])).toStrictEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4
   })
})
test('6,20,34,42', () => {
   expect(analysis([6, 20, 34, 42])).toStrictEqual({
      average: 102,
      min: 6,
      max: 42,
      length: 4
   })
})

test('-20, -5, 500, 825', () => {
   expect(analysis([1, 2, 3, 4])).toStrictEqual({
      average: 325,
      min: -20,
      max: 825,
      length: 4
   })
})
