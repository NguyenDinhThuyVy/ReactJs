import React from 'react'
import { debug, log } from '../constants'
export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

export default function connect<T>(Component: React.ComponentType<T>) {
  return function (props: T) {
    return <Component {...props} debug={debug} log={log} />
  }
}
