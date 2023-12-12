import React from 'react'
import { debug, log } from '../constants'
export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

export default function connect<T>(Component: React.ComponentType<T>) {
  return function (props: Omit<T, keyof ExtraInfoType>) {
    return <Component {...(props as T)} debug={debug} log={log} />
  }
}
