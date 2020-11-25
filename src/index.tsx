import dayjs, { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import './styles.sass'
import weekDays from './Utils/WeekDays'
import isToday from 'dayjs/plugin/isToday'
import CalendarHeader from './Components/CalendarHeader/CalendarHeader'
import CalendarTable from './Components/CalendarTable/CalendarTable'
import CalendarHeading from './Components/CalendarHeading/CalendarHeading'
import { DayEvent } from './Interfaces/interfaces'
dayjs.extend(isToday)

interface Props {
  iso?: boolean
  onClick?: (value: Object) => void
  onDoubleClick?: (value: Object) => void
  lang?: string
  events?: Array<DayEvent>
}

const Calendar = ({ iso = false, onClick, onDoubleClick, events }: Props) => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [monthWeeks, setMonthWeeks] = useState(
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
    setMonthWeeks(weekDays(date.month(), date.year(), iso))
    setCurrentMonthText(date.format('MMMM'))
    setCurrentYearText(date.format('YYYY'))
  }

  return (
    <div id='danger-calendar'>
      <CalendarHeader
        setDate={setDate}
        month={currentMonthText}
        year={currentYearText}
        selectedDate={selectedDate}
      />
      <div className='danger-days-container'>
        <CalendarHeading weeks={monthWeeks} />
        <CalendarTable
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          weeks={monthWeeks}
          events={events}
        />
      </div>
    </div>
  )
}

export default Calendar
