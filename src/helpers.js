import axios from 'axios'

//Main API
const URL = 'https://asia-northeast1-miniserver-208702.cloudfunctions.net/api'
export default () => {
  return axios.get(URL)
}
