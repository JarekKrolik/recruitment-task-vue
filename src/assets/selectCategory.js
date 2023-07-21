export const selectCategory = (category, array) => {
  if (category === 'pet-canaries') {
    const result = array.filter((e) => e.category === 'pet' && e.type === 'canary')
    result.sort((a, b) => a - b)
    return result
  }
  if (category === 'pet-rodents') {
    const result = array.filter((e) => e.category === 'pet' && e.type !== 'canary')
    return result
  }
  if (category === 'pet-house-tree') {
    const result = array.filter((e) => e.category === 'pet-house' && e.type === 'tree')
    result.sort((a, b) => a.priceInPln - b.priceInPln)
    return result
  }
  if (category === 'pet-house-ground') {
    const result = array.filter((e) => e.category === 'pet-house' && e.type === 'ground')
    return result
  } else if (category === 'all') {
    const result = array
    result.sort((a, b) => a.priceInPln - b.priceInPln)
    return result
  }
}
