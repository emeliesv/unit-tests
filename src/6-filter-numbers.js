export const filterNumbers = (array, largerThan) => {
  const isLargerThan = (number) => number <= largerThan
  return array.filter(isLargerThan)
}
//This will take a number, check if that number is smaller or equal to the parameter that will be sent in and store the smaller/equal value in an array

//predicate - an expression that is either true or false 

export const filterFunc = (array, predicate) => {
  const filteredArray = []
  array.forEach(element => {
    if(predicate(element)){
      filteredArray.push(element)
    } 
  })
  return filteredArray
}
//This is a homemade filter-function which will do the exact same thing as a filterfunction.