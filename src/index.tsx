import dayjs, { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import './styles.sass'
import weekDays from './Utils/WeekDays'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

interface Props {
  iso?: boolean
}

const Calendar = ({ iso = false }: Props) => {
  let today = dayjs()
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [monthWeekDays, setMonthWeekDays] = useState(
    weekDays(selectedDate.month(), selectedDate.year(), iso)
  )
  const [currentMonthText, setCurrentMonthText] = useState(
    selectedDate.format('MMMM')
  )
  const [currentYearText, setCurrentYearText] = useState(
    selectedDate.format('YYYY')
  )

  const setDate = (date: Dayjs) => {
    setSelectedDate(date)
    setMonthWeekDays(weekDays(date.month(), date.year(), iso))
    setCurrentMonthText(date.format('MMMM'))
    setCurrentYearText(date.format('YYYY'))
  }

  return (
    <div id='danger-calendar'>
      <div className='danger-heading'>
        <div className='danger-current-date'>
          <span className='danger-month'>{currentMonthText} </span>
          <span className='danger-year'>{currentYearText}</span>
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
      <div className='danger-days-container'>
        <div className='danger-table-header'>
          {monthWeekDays[0].days.map((day, index: number) => (
            <div
              key={index}
              className={`danger-day-of-week ${
                day.day() === 6 || day.day() === 0
                  ? 'danger-day-of-week-end'
                  : ''
              }`}
            >
              {day.format('ddd')}
            </div>
          ))}
        </div>
        <table className='danger-days-table'>
          <tbody>
            {monthWeekDays.map((week, idx: number) => (
              <tr key={idx}>
                {week.days.map((day, index) => (
                  <td
                    className={`danger-day-box ${
                      day.day() === 6 || day.day() === 0
                        ? 'danger-day-box-week-end'
                        : ''
                    }`}
                    key={index}
                  >
                    <div
                      className={`danger-day-number ${
                        day.isToday() ? 'danger-day-today-indicator' : ''
                      }`}
                    >
                      {day.format('D')}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Calendar
