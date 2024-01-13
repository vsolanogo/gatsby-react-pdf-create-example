export const getUserCountry = () => {
  try {
    if (localStorage.getItem('userCountry')) {
      return JSON.parse(localStorage.getItem('userCountry'))
    } else {
      return false
    }
  } catch (e) {}

  return false
}

export const setUserCountry = (obj) => {
  try {
    localStorage.setItem('userCountry', JSON.stringify(obj))
  } catch (e) {}
}
