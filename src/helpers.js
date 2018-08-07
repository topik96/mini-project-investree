import axios from 'axios'

//Main API
const URL_PEOPLE =
  'https://asia-northeast1-miniserver-208702.cloudfunctions.net/api'
const BASE_URL = ''
export function getPeople() {
  return axios.get(URL_PEOPLE)
}

export function checkingNUmber() {
  return axios.get('http://apilayer.net/api/validate')
}
