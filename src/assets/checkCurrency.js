export const checkCurrency = async (currency) => {
  try {
    const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
    const data = await response.json()
    const rate = data[0].rates.filter((e) => e.code === currency)
    return rate[0].mid
  } catch (e) {
    return 'error'
  }
}
