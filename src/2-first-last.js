export const firstLast = (items) => {
  if (items.length === 0) {
    return `No items!`
  }
  else if (items.length === 1) {
    return `Only item: bob man!`
  }
  else if (items.length === 5) {
    return `First: ${items[0]}, Last: ${items[4]}`
  }

  return `First: ${items[0]}, Last: ${items[1]}`
}
