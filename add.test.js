import add from './add'

test('two plus two equals four', () => {
   expect(add(2, 2)).toBe(4)
})

test('negative one plus 1 equals zero', () => {
   expect(add(-1, 1)).toBe(0)
})
