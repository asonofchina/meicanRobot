import moment from 'moment'
import _ from '../config'
import get from '../utils/fetch'


export default function getCalendarItems (date = moment().format('YYYY-MM-DD')) {
  return new Promise((resolve, reject) => {
    get(_.to(`preorder/api/v2.1/calendarItems/list?beginDate=${date}&endDate=${date}`), {
      headers: { 'cookie': _.COOKIE }
    }).then(body => {
      resolve(body)
    }).catch((err) => {
      reject(err)
    })
  })
}
