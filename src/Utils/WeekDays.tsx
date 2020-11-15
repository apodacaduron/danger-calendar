import dayjs, { Dayjs } from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

interface WeekObj {
  day: Dayjs
  week: number
}

interface DaysArr {
  days: Array<Dayjs>
  week: number
}

const weekDays = (month: number, year: number, iso: boolean = false) => {
  const endDate = dayjs().year(year).month(month).endOf('month')
  return Array(endDate.date())
    .fill(0)
    .map((_, i: number) =>
      dayjs()
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
              dayjs()
                .week(week)
                .startOf(iso ? 'isoWeek' : 'week')
                .add(i, 'day')
            )
        } as DaysArr)
    )
}

export default weekDays
