import React from 'react'
import dayjs, { Dayjs } from 'dayjs'

import './EventIndicator.sass'
import { DayEvent } from '../../Interfaces/interfaces'

interface Props {
  events?: Array<DayEvent>
  day: Dayjs
}

const EventIndicator = ({ events, day }: Props) => {
  return (
    <div>
      {events &&
        events.map(
          (event) =>
            dayjs(event.date).isSame(day) && (
              <div
                className='danger-event-indicator'
                style={{ background: event.color || '#1B9CFC' }}
              >
                {event.title}
              </div>
            )
        )}
    </div>
  )
}

export default EventIndicator
