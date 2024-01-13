import { v4 as uuidv4 } from 'uuid'

export const bookingMeetingSession = () => {
  try {
    if (sessionStorage.getItem('bookingMeetingSession')) {
      const obj = JSON.parse(sessionStorage.getItem('bookingMeetingSession'))

      return obj.id
    } else {
      const newId = uuidv4()

      sessionStorage.setItem('bookingMeetingSession', JSON.stringify({ id: newId }))

      return newId
    }
  } catch {}

  return false
}
