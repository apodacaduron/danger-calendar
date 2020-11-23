import dayjs, { Dayjs } from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
import isoWeek from 'dayjs/plugin/isoWeek'
import { Week } from '../Interfaces/interfaces'
dayjs.extend(isoWeek)

interface WeekObj {
  day: Dayjs
  week: number
}

const weekDays = (month: number, year: number, iso: boolean = false) => {
  const today = dayjs()
  const endDate = today.year(year).month(month).endOf('month')
  return Array(endDate.date())
    .fill(0)
    .map((_, i: number) =>
      today
        .year(year)
        .month(month)
        .date(i + 1)
    )
    .map((day) => ({ day, week: day.week() } as WeekObj))
    .filter(
      ({ week }, i, arr) => arr.findIndex((info) => info.week === week) === i
    )
    .map(
      ({ week }) =>
        ({
          week,
          days: Array(7)
            .fill(0)
            .map((_, i) =>
              today
                .week(week)
                .startOf(iso ? 'isoWeek' : 'week')
                .add(i, 'day')
            )
        } as Week)
    )
}

export default weekDays
