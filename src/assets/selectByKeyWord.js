export const selectByKeyWord = (word, array) => {
  const response = array.filter((e) => {
    return (
      e.name.toUpperCase().includes(word.toUpperCase()) ||
      e.category.toUpperCase().includes(word.toUpperCase()) ||
      e.priceInPln == word ||
      e.type.toUpperCase().includes(word.toUpperCase()) ||
      e.color.toUpperCase().includes(word.toUpperCase()) ||
      e.animalSize.toUpperCase().includes(word.toUpperCase())
    )
  })
  return response
}
