export const checkWhetherCookiesAccepted = () => {
  if (localStorage.getItem('cookieConsent')) {
    const obj = JSON.parse(localStorage.getItem('cookieConsent'))

    if (obj.cookiesAccepted !== true) {
      return false
    } else {
      return true
    }
  }
  return false
}

export const setCookiesAccepted = () => {
  try {
    localStorage.setItem('cookieConsent', JSON.stringify({ cookiesAccepted: true }))
  } catch {}
}
