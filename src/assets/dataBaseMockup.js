import { v4 as uuidv4 } from 'uuid'

export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('ListOfProducts')
  return JSON.parse(data)
}

export const saveDataToLocalStorage = (data) => {
  const resp = JSON.stringify(data)
  localStorage.setItem('ListOfProducts', resp)
}

export const insertProductIntoDb = async (product, array) => {
  const id = await uuidv4()
  const item = { ...product, id }
  array.push(item)
  return [...array]
}
