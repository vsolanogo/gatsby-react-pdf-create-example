export const saveUserInfoIfSuccess = (obj) => {
  try {
    localStorage.setItem('userFilledEstimator', JSON.stringify(obj))
  } catch (e) {}
}

export const cleanUserInfo = () => {
  try {
    localStorage.removeItem('userFilledEstimator')
  } catch (e) {}
}
