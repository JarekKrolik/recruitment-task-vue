export const selectCategory = (category, array) => {
  if (category === 'pet-canaries') {
    const result = array.filter((e) => e.category === 'pet' && e.type === 'canary')
    return result
  }
  if (category === 'pet-rodents') {
    const result = array.filter((e) => e.category === 'pet' && e.type !== 'canary')
    return result
  }
  if (category === 'pet-house-tree') {
    const result = array.filter((e) => e.category === 'pet-house' && e.type === 'tree')
    return result
  }
  if (category === 'pet-house-ground') {
    const result = array.filter((e) => e.category === 'pet-house' && e.type === 'ground')
    return result
  } else {
    const result = array.filter((e) => e.category === category)
    return result
  }
}
