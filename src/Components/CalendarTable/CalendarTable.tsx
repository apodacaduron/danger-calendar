import React from 'react'
import EventIndicator from '../EventIndicator/EventIndicator'
import DayIndicator from '../DayIndicator/DayIndicator'
import { DayEvent, Week } from '../../Interfaces/interfaces'

import './CalendarTable.sass'

interface Props {
  weeks: Array<Week>
  onClick?: (value: Object) => void
  onDoubleClick?: (value: Object) => void
  events?: Array<DayEvent>
  limit?: number
}

const CalendarTable = ({
  weeks,
  onClick,
  onDoubleClick,
  events,
  limit = 3
}: Props) => {
  return (
    <table className='danger-days-table' cellPadding='0' cellSpacing='0'>
      <tbody>
        {weeks.map((week, idx: number) => (
          <tr key={idx}>
            {week.days.map((day, index: number) => (
              <td
                className={`danger-day-box danger-day-box-pointer ${
                  day.day() === 6 || day.day() === 0
                    ? 'danger-day-box-week-end'
                    : ''
                } ${
                  weeks.length > 5
                    ? 'danger-six-week-height'
                    : 'danger-five-week-height'
                }`}
                key={index}
                onClick={(evt) =>
                  onClick && onClick({ ...evt, date: day.format('YYYY-MM-DD') })
                }
                onDoubleClick={(evt) =>
                  onDoubleClick &&
                  onDoubleClick({ ...evt, date: day.format('YYYY-MM-DD') })
                }
              >
                <EventIndicator day={day} events={events} limit={limit} />
                <DayIndicator day={day} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CalendarTable
