import caesar from './caesar'

test('abc becomes bcd with shift of 1', () => {
   expect(caesar('abc', 1)).toBe('bcd')
})

test('xyz becomes abc with shift of 3', () => {
   expect(caesar('xyz', 3)).toBe('abc')
})

test('AbCdEf becomes BcDeFg with shift of 1', () => {
   expect(caesar('AbCdEf', 1)).toBe('BcDeFg')
})

test('jim.. becomes kjn.. with shift of 1', () => {
   expect(caesar('jim..', 1)).toBe('kjn..')
})
