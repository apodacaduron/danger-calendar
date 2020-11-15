import React from 'react'
import styles from './styles.sass'
import weekDays from './Utils/WeekDays'

const Calendar = () => {
  console.log(weekDays(10, 2020))
  return (
    <div className={styles.calendar}>
      <div className='header'></div>
      <div className='days'></div>
    </div>
  )
}

export default Calendar
