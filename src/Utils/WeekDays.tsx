import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
import isoWeek from 'dayjs/plugin/isoWeek'
import { Week } from '../Interfaces/interfaces'
dayjs.extend(isoWeek)

const weekDays = (month: number, year: number, iso = false) => {
  let calendar: Array<Week> = []
  const today = dayjs()
  const startDay = today
    .year(year)
    .month(month)
    .startOf('month')
    .startOf(iso ? 'isoWeek' : 'week')
  const endDay = today
    .year(year)
    .month(month)
    .endOf('month')
    .endOf(iso ? 'isoWeek' : 'week')

  let date = startDay.subtract(1, 'day')

  while (date.isBefore(endDay, 'day')) {
    calendar.push({
      week: date.week(),
      days: Array(7)
        .fill(0)
        .map(() => {
          date = date.add(1, 'day')
          return date
        })
    })
  }

  return calendar
}

export default weekDays
