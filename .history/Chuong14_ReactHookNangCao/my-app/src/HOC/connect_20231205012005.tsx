import React from 'react'
import { debug, log } from '../constants'
export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

export default function connect(Component: React.ComponentType<T>) {
  return function (props: any) {
    return <Component {...props} debug={debug} log={log} />
  }
}
