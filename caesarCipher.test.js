import caesarCipher from './caesarCipher'

test('abc becomes bcd with shift of 1', () => {
   expect(caesarCipher('abc', 1)).toBe('bcd')
})

test('xyz becomes abc with shift of 3', () => {
   expect(caesarCipher('xyz', 3)).toBe('abc')
})
test('"fyyfhp fy ifbs" becomes "attack at dawn" with shift of 5', () => {
   expect(caesarCipher('fyyfhp fy ifbs', 5)).toBe('attack at dawn')
})
