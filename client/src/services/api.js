import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://localhost:7000/addBusiness`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
