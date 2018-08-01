import * as ACTION from '../../redux/type'
import API from '../../helpers'
const getData = () => {
  return {
    type: ACTION.FETCHING_DATA
  }
}
const getDataSuccess = data => {
  return {
    type: ACTION.FETCHING_DATA_SUCCESS,
    data
  }
}

const rangeAge = (age1, age2) => {
  return {
    type: ACTION.RANGE_AGE,
    age1,
    age2
  }
}

export const fetchData = () => {
  return dispatch => {
    dispatch(getData())
    API()
      .then(res => {
        dispatch(getDataSuccess(res.data))
      })
      .catch(err => console.log(err))
  }
}
