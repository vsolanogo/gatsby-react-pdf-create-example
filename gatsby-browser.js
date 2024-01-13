const ITEM_NAME = "userVisitedPages"
// Logs when the client route changes

exports.onRouteUpdate = ({ location, prevLocation }) => {
  const save = (str) => {
    const currentTimestamp = +new Date()
    const newObj = {
      time: currentTimestamp,
      url: location.pathname,
      referrerUrl: str,
      elapsed: 0,
    }

    try {
      if (localStorage.getItem(ITEM_NAME)) {
        const prevArr = JSON.parse(localStorage.getItem(ITEM_NAME))

        if (!prevArr[0].time) {
          throw "1"
        }

        const elapsed = currentTimestamp - prevArr[0].time

        const newArr = [{ ...newObj, elapsed: elapsed }, ...prevArr]
        localStorage.setItem(
          ITEM_NAME,
          JSON.stringify(newArr.length > 100 ? newArr.slice(0, 99) : newArr)
        )
      } else {
        localStorage.setItem(ITEM_NAME, JSON.stringify([newObj]))
      }
    } catch (e) {
      localStorage.removeItem(ITEM_NAME)
    }
  }

  const oldPathname = prevLocation ? prevLocation.pathname : null
  if (!oldPathname) {
    save(document.referrer)
  } else {
    save(oldPathname)
  }
}
