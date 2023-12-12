import { debug, log } from '../constants'

export default function connect(Component: any) {
  return function (props: any) {
    return <Component {...props} debug={debug} log={log} />
  }
}
