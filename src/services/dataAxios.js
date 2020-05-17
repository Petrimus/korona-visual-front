import axios from 'axios'

const baseUrl = '/api/'
// const longBaseUrl = 'http://localhost:3001/api/'

const getData = async () => {
  const response = await axios.get(`${baseUrl}infections`)
  return response.data
}

const getHospitalisedData = async () => {
  const response = await axios.get(`${baseUrl}hospitalised`)
  return response.data
}

const getDeathsData = async () => {
  const response = await axios.get(`${baseUrl}deaths`)
  return response.data
}


export default { getData, getHospitalisedData, getDeathsData }