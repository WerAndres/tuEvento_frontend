import config from '../config/config'
import axios from 'axios'

export default {
  post (user) {
    // console.log('user: ' + JSON.stringify(user))
    return axios.post(config.API_URL + '/registro', user).then(response => response.data).catch(e => {
      this.errors.push(e)
    })
  }
}
