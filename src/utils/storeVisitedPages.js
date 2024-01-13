import * as moment from 'moment-timezone'
const ITEM_NAME = 'userVisitedPages'

export const getVisitedPages = () => {
  try {
    if (localStorage.getItem(ITEM_NAME)) {
      return JSON.parse(localStorage.getItem(ITEM_NAME))
    } else {
      return false
    }
  } catch (e) {}

  return false
}

export const getVisitedPagesStr = () => {
  return getVisitedPages()
    ? getVisitedPages()
        .map((i) => {
          const d = moment.duration(i.elapsed, 'milliseconds')
          const hours = Math.floor(d.asHours())
          const mins = Math.floor(d.asMinutes()) - hours * 60
          const seconds = Math.floor(d.asSeconds()) - Math.floor(d.asMinutes()) * 60
          const kyivTime = moment(i.time).tz('Europe/Kiev').format('HH:mm z DD.MM.YYYY')
          return `TIME: ${kyivTime} | ELAPSED ${hours}h:${mins}m:${seconds}s 
          URL: ${i.url}
          REFFERER_URL: ${i.referrerUrl}
          ===========
          `
        })
        .join('\n')
    : ''
}

export const getVisitedPagesObjects = () => {
  return getVisitedPages()
    ? JSON.stringify(
        getVisitedPages().map((i) => {
          return {
            url: i.url,
            referrerUrl: i.referrerUrl,
            time: Math.floor(i.time / 1000),
            elapsed: Math.floor(i.elapsed / 1000),
          }
        }),
      )
    : JSON.stringify([])
}
