import * as ACTION from '../../redux/type'
import { getPeople } from '../../helpers'
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
  return {}
}

export const fetchData = (age1 = 50) => {
  return dispatch => {
    dispatch(getData())
    getPeople()
      .then(res => {
        const filterData = res.data.filter(dataFilter => {
          return dataFilter.age <= age1
        })
        dispatch(getDataSuccess(filterData))
      })
      .catch(err => console.log(err))
  }
}
