import React from 'react'
import dayjs, { Dayjs } from 'dayjs'

import './EventIndicator.sass'
import { DayEvent } from '../../Interfaces/interfaces'

interface Props {
  events?: Array<DayEvent>
  day: Dayjs
  limit?: number
}

const EventIndicator = ({ events, day, limit = 3 }: Props) => {
  const matchDayEvents =
    events &&
    events.filter((event) =>
      dayjs(dayjs(event.date).format('YYYY-MM-DD')).isSame(day)
    )

  return (
    <div>
      {matchDayEvents &&
        matchDayEvents.map((evt, index: number) => {
          return (
            index < limit && (
              <div
                key={index}
                className='danger-event-indicator'
                style={{ background: evt.color || '#1B9CFC' }}
              >
                {evt.title}
              </div>
            )
          )
        })}
      {matchDayEvents && matchDayEvents.length > limit && (
        <div className='danger-more-events'>
          And {matchDayEvents.length - limit} events more
        </div>
      )}
    </div>
  )
}

export default EventIndicator
