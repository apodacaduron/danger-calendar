import { Dayjs } from 'dayjs'

interface DayEvent {
  date: string
  title: string
  description?: string
  color?: string
}

interface Week {
  days: Array<Dayjs>
  week: number
}

export { DayEvent, Week }
