import _ from 'lodash'
import {
  READ_EVENTS,
  DELET_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELET_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
