const reverseString = (string) => {
   const reversedArray = []
   string.split('').map(i => {
      reversedArray.unshift(i)
   })
   return reversedArray.join('')
}

export default reverseString
