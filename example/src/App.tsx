import React from 'react'

import Calendar from 'danger-calendar'
import 'danger-calendar/dist/index.css'

const App = () => {
  return (
    <div className='fullscreen'>
      <Calendar onClick={(value) => console.log(value)} />
    </div>
  )
}

export default App
