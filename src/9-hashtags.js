export const hashtags = (text) => {
  text = text.split(' ')
  return text.filter(word => word[0] === '#')
}

//by using the split() you can turn a string into an array. By using ('space') you tell the function to split every word separated by a space into one item in the array. Next you can use the filter() to look at each word in the array and, starting with the word on index 0 compare it to the "#", if it starts with a "#" it will include it in the array
//This doesn't work if you try to have a "#" inside of a word like "evr#thing"