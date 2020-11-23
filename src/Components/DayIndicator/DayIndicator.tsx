import React from 'react'
import { Dayjs } from 'dayjs'

import './DayIndicator.sass'

interface Props {
  day: Dayjs
}

const DayIndicator = ({ day }: Props) => {
  return (
    <div
      className={`danger-day-number ${
        day.isToday() ? 'danger-today-indicator' : ''
      }`}
    >
      {day.format('D')}
    </div>
  )
}

export default DayIndicator
