import config from '../config/config'
import axios from 'axios'

export default {
  post (event) {
    console.log('event: ' + JSON.stringify(event))
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
    return axios.post(config.API_URL + '/event', event, { headers }).then(response => response.data).catch(e => {
      this.errors.push(e)
    })
  },
  comprarBoleta (idUsuario, idEvento) {
    console.log('event: ' + JSON.stringify(event))
    let compbol = { 'id_usuario': idUsuario, 'id_evento': idEvento }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
    return axios.post(config.API_URL + '/event/buyTicket', compbol, { headers }).then(response => response.data).catch(e => {
      this.errors.push(e)
    })
  },
  getList () {
    // console.log('event: ' + JSON.stringify(event))
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
    return axios.get(config.API_URL + '/event', { headers }).then(response => response.data).catch(e => {
      this.errors.push(e)
    })
  },
  getListBoletosByUsuario (idUsuario) {
    // console.log('event: ' + JSON.stringify(event))
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
    return axios.get(config.API_URL + '/event/ticket?idUsuario=' + idUsuario, { headers }).then(response => response.data).catch(e => {
      this.errors.push(e)
    })
  },
  update (event, id) {
    // console.log('event: ' + JSON.stringify(event))
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
    return axios.put(config.API_URL + '/event', event, { headers }).then(response => response.data).catch(e => {
      this.errors.push(e)
    })
  }
}
