import moment from 'moment'

let today = process.env.NODE_ENV === 'prod' ?
  moment().add(1, 'days').format('YYYY-MM-DD') :
  moment().add(1, 'days').format('YYYY-MM-DD')

export default function checkOneTimeOneDay (text) {
  const now = moment().format('YYYY-MM-DD')

  if (text !== '' && today !== now) {
    console.log(text, now, today)
    today = now
    return true
  } else {
    return false
  }
}
