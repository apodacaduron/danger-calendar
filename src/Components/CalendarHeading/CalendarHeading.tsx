import React from 'react'
import dayjs from 'dayjs'
import { Week } from '../../Interfaces/interfaces'

import './CalendarHeading.sass'

interface Props {
  weeks: Array<Week>
}

const CalendarHeading = ({ weeks }: Props) => {
  return (
    <div className='danger-table-header'>
      {weeks[0].days.map((day, index: number) => (
        <div
          key={index}
          className={`danger-day-of-week ${
            day.day() === 6 || day.day() === 0 ? 'danger-day-of-week-end' : ''
          }`}
        >
          {day.format('ddd')}
        </div>
      ))}
    </div>
  )
}

export default CalendarHeading
