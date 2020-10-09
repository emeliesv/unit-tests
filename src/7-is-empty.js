export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string' && stringArrayOrObject === '') {
    return true
  } else if (Array.isArray(stringArrayOrObject) && stringArrayOrObject.length === 0) {
    return true
  } else if (type === 'object' && Object.keys(stringArrayOrObject).length === 0) {
    return true
  } else
  return false
}
//Line 8, the object.keys checks if there are any keys inside an object. 
//Everything in javascript is an object. To check if something is an array one would have to use Array.isArray().
//It's important to order you if-statement in prioritized order, so the most specific if-statement should always be at the top.
//If you start off by writing a more generic if-statement it would just run through the if-statement.
//Always write console.log to check that your code is working. That can be written to see if functions are working and in if-statements as well.