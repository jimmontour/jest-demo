import reverseString from './reverseString'

test('jim becomes mij', () => {
   expect(reverseString('jim')).toBe('mij')
})

test('JavaScript is cool becomes looc si tpircSavaJ', () => {
   expect(reverseString('JavaScript is cool')).toBe('looc si tpircSavaJ')
})
