export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('ListOfProducts')
  return JSON.parse(data)
}

export const saveDataToLocalStorage = (data) => {
  const resp = JSON.stringify(data)
  localStorage.setItem('ListOfProducts', resp)
}
