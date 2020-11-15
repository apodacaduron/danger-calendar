import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)

const weekDays = (month: number, year: number) => {
  const endDate = dayjs().year(year).month(month).endOf('month')
  return Array(endDate.date())
    .fill(0)
    .map((_, i) =>
      dayjs()
        .year(year)
        .month(month)
        .date(i + 1)
    )
    .map((day) => ({ day, week: day.week() }))
    .filter(
      ({ week }, i, arr) => arr.findIndex((info) => info.week === week) === i
    )
    .map(({ week }) => ({
      week,
      days: Array(7)
        .fill(0)
        .map((_, i) => dayjs().week(week).startOf('week').add(i, 'day'))
    }))
}

export default weekDays
