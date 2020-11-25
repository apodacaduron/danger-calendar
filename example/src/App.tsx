import React from 'react'

import Calendar from 'danger-calendar'
import 'danger-calendar/dist/index.css'

const App = () => {
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
      color: '#27ae60'
    },
    {
      date: '2020-11-22 00:00:00',
      title: 'Happy Birthday',
      description: '',
      color: '#8e44ad'
    }
  ]

  return (
    <div className='fullscreen'>
      <Calendar
        onClick={(value) => console.log(value)}
        onDoubleClick={(value) => console.log(value)}
        events={events}
        iso={false}
      />
    </div>
  )
}

export default App
