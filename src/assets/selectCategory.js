export const selectCategory = (category, array) => {
  const result = array.filter((e) => e.category === category)
  return result
}
