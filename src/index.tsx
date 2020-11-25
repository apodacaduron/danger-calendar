import dayjs, { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import './styles.sass'
import weekDays from './Utils/WeekDays'
import isToday from 'dayjs/plugin/isToday'
import CalendarHeader from './Components/CalendarHeader/CalendarHeader'
import CalendarTable from './Components/CalendarTable/CalendarTable'
import CalendarHeading from './Components/CalendarHeading/CalendarHeading'
dayjs.extend(isToday)

interface Props {
  iso?: boolean
  onClick?: (value: Object) => void
  onDoubleClick?: (value: Object) => void
  lang?: string
}

const events = [
  {
    date: '2020-11-22 00:00:00',
    title: 'Happy Birthday',
    description: '',
    color: '#8e44ad'
  },
  {
    date: '2020-11-18 00:00:00',
    title: 'Happy Birthday',
    description: '',
    color: '#27ae60'
  },
  {
    date: '2020-11-22 13:00:00',
    title: 'Happy Birthday',
    description: ''
  },
  {
    date: '2020-11-22 00:00:00',
    title: 'Happy Birthday',
    description: '',
    color: '#27ae60'
  },
  {
    date: '2020-11-22 00:00:00',
    title: 'Happy Birthday',
    description: '',
    color: '#27ae60'
  },
  {
    date: '2020-11-22 00:00:00',
    title: 'Happy Birthday',
    description: '',
    color: '#8e44ad'
  }
]

const Calendar = ({ iso = false, onClick, onDoubleClick }: Props) => {
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
