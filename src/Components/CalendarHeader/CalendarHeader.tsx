import React from 'react'
import dayjs, { Dayjs } from 'dayjs'

import './CalendarHeader.sass'

interface Props {
  setDate: (date: Dayjs) => void
  month: string
  year: string
  selectedDate: Dayjs
}

const CalendarHeader = ({ setDate, month, year, selectedDate }: Props) => {
  let today = dayjs()
  return (
    <div className='danger-calendar-header'>
      <div className='danger-current-date'>
        <span className='danger-month'>{month} </span>
        <span className='danger-year'>{year}</span>
      </div>
      <div className='danger-actions'>
        <button
          className='danger-calendar-button'
          onClick={() => setDate(selectedDate.subtract(1, 'month'))}
        >
          {'<'}
        </button>
        <button
          className='danger-calendar-button'
          onClick={() => setDate(today)}
        >
          Today
        </button>
        <button
          className='danger-calendar-button'
          onClick={() => setDate(selectedDate.add(1, 'month'))}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default CalendarHeader
