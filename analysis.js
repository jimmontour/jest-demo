const average = (array) => {
   const sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
   }, 0)
   return sum / array.length
}

const min = (array) => {
   let min = array[0];
   array.map(num => {
      num < min ? min = num : min
   })
   return min
}

const max = (array) => {
   let max = array[0];
   array.map(num => {
      num > max ? max = num : max
   })
   return max
}

const length = (array) => {
   return array.length
}


const analysis = (array) => {
   return {
      average: average(array),
      min: min(array),
      max: max(array),
      length: length(array)
   }
}

const test = analysis([1,2,3,4,5])

export default analysis
