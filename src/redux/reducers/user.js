import * as ACTION from '../type'
const initState = {
  data: [],
  isFetching: true
}

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.FETCHING_DATA:
      return {
        ...state,
        isFetching: false,
        data: []
      }
    case ACTION.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    default:
      return state
  }
}

export default UserReducer
