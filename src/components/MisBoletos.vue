<template>
  <div id="misboletos">
    <div class="container">
      <div class="centrar">
        <div class="titleBox" style="display: inline-block; margin-top: 20px">
          Mis boletos
        </div>
      </div>
      <div class="containerEventos">
        <div class="tableEventos">
          <b-table
            show-empty
            :items="data"
            :fields="campos"
          >
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from '../services/EventService.js'

export default {
  name: 'misboletos',
  methods: {
    getUnits: function () {
      let token = localStorage.getItem('token')
      this.actualUser = JSON.parse(localStorage.getItem('user'))
      if (token) {
        console.log('autorizado')
        EventService.getListBoletosByUsuario(this.actualUser.id_usuario).then((data) => {
          console.log('data: ' + JSON.stringify(data))
          if (typeof data.error !== 'undefined') {
          } else {
            this.data = data.data
          }
          this.isLoading = false
        }).catch((error) => {
          this.isLoading = false
          console.log(JSON.stringify(error))
        })
      } else {
        this.$router.push('/login')
      }
    }
  },
  beforeMount () {
    this.getUnits()
  },
  data () {
    return {
      actualUser: '',
      data: [],
      campos: [
        { key: 'nombre_evento', label: 'Evento', sortable: true, class: 'text-center' },
        { key: 'total_compradas', label: 'Compradas', sortable: true, class: 'text-center' }
      ]
    }
  }
}

</script>

<style scoped>
#misboletos{

}
</style>
