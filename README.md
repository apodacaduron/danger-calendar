# danger-calendar

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/danger-calendar.svg)](https://www.npmjs.com/package/danger-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save danger-calendar
```

## Usage

```tsx
import React from 'react'

import Calendar from 'danger-calendar'
import 'danger-calendar/dist/index.css'

const Example = () => {
  return <Calendar />
}
```

## Props

| Property        | Type       | Values         | Description                                                               | Default |
| --------------- | ---------- | -------------- | ------------------------------------------------------------------------- | ------- |
| `onClick`       | `Function` |                | Trigger function and returns a click event with a date after click        |         |
| `onDoubleCLick` | `Function` |                | Trigger function and returns a click event with a date after double click |         |
| `iso`           | `Boolean`  | `true` `false` | Changes calendar format to ISO 8601 (ISO 8601 starts in monday)           | `false` |

## License

MIT © [](https://github.com/)
