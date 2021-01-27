import calculator from './calculator'

test('1+1=2', () => {
   expect(calculator('add', 1, 1)).toBe(2)
})

test('4-2=2', () => {
   expect(calculator('subtract', 4, 2)).toBe(2)
})

test('5*5=25', () => {
   expect(calculator('multiply', 5, 5)).toBe(25)
})

test('10/2=5', () => {
   expect(calculator('divide', 10, 2)).toBe(5)
})
