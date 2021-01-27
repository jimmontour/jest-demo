const caesarCipher = (string, shift) => {
   const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','s','t','u','v','w','x','y','z']

   // split into an array
   const splitChars = string.split('')

   // turn ito a corrisponding number
   const toNum = splitChars.map(char => {
      (if alphabet.indexOf(char) !== -1) {
         return char = alphabet.indexOf(char)
      } else {
         return char
      }
   })

console.log(toNum)


   // shift the number based on the shift, and restart after 26

   // turn into corrisponding letter

   // join to a string
}

export default caesarCipher
