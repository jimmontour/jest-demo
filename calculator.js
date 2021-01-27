const calculator = (opp, first, second) => {
   if (opp === 'add') {
      return parseInt(first + second)
   } else if (opp === 'subtract') {
      return (first - second)
   } else if (opp === 'multiply') {
      return (first * second)
   } else if (opp === 'divide') {
      return (first / second)
   } else {
      return "Not a function"
   }
}

export default calculator
