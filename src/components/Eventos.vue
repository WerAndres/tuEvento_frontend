<template>
  <div id="eventos">
    <div class="container">
      <div class="centrar">
        <div class="titleBox" style="display: inline-block; margin-top: 20px">
          Eventos
        </div>
      </div>
      <div v-if="showAdd || showMod" class="volver" @click="goVolver()" style="margin: 10px">
          <div class="containerFontAwesome btnFA smallFA"><font-awesome-icon icon="arrow-left"/>Volver</div>
      </div>
      <div v-if="showAdd || showMod" class="containerAddEventos">
        <div v-if="!isLoading" class="col-md-10 col-xs-10 login_control centrar">
          <form id="addEvento" @submit.prevent="validateBeforeSubmitAddEvent()" key="unique">
            <div class="control">
                <div class="label" style="float: left">Nombre del evento:</div>
                <input type="text" v-validate="'required'" name="nombreEvento" v-model="event.nombre_evento" class="form-control" placeholder="Nombre del evento"/>
                <span class="error" v-if="errors.has('nombreEvento')">{{ errors.first('nombreEvento') }}</span>
            </div>
            <div class="control">
                <div class="label" style="float: left">Lugar del evento:</div>
                <input type="text" v-validate="'required'" name="lugarEvento" v-model="event.lugar_evento" class="form-control" placeholder="Lugar del evento" />
                <span class="error" v-if="errors.has('lugarEvento')">{{ errors.first('lugarEvento') }}</span>
            </div>
            <div class="control">
                <div class="label" style="float: left">Número de boletas:</div>
                <input type="text" v-mask="'###############'" v-validate="'required'" name="numeroBoletas" v-model="event.numero_boletas" class="form-control" placeholder="1" />
                <span class="error" v-if="errors.has('numeroBoletas')">{{ errors.first('numeroBoletas') }}</span>
            </div>
            <div class="centrar">
                <div>
                  <button class="btn btn-blue" type="submit">Guardar</button>
                </div>
            </div>
          </form>
          <b-modal id="modalOK" v-model="modalOkShow" title="El usuario fue registrado con exito" ok-only @hidden="handleOkAddEvent" @ok="handleOkAddEvent">
            <div class="containerFontAwesome okFA largeFA"><font-awesome-icon icon="check-circle"/></div>
            <p class="my-4">El evento fue registrado con exito</p>
          </b-modal>
        </div>
      </div>
      <div v-if="!showAdd && !showMod" class="containerEventos">
        <div v-if="isPromotor" class="addEventos" @click="agregarEvento()">
          + Agregar evento
        </div>
        <div class="tableEventos">
          <b-table
            show-empty
            :items="data"
            :fields="campos"
          >
            <template slot="actions" slot-scope="row">
              <div v-if="isPromotor" @click="modificarEvento(row)">
                <div class="containerFontAwesome btnFA smallFA"><font-awesome-icon icon="edit"/></div>
              </div>
              <div v-if="isCliente" @click="comprarBoleto(row)">
                 <div class="containerFontAwesome btnFA smallFA"><font-awesome-icon icon="cart-plus"/></div>
              </div>
            </template>
          </b-table>
        </div>
        <b-modal id="modalOKCom" v-model="modalOkComShow" title="Compra boletería" ok-only @ok="handleOkComEvent" @hidden="handleOkComEvent">
          <div v-if="!buyT" class="containerFontAwesome errorFA largeFA"><font-awesome-icon icon="exclamation-circle"/></div>
          <div v-if="buyT" class="containerFontAwesome okFA largeFA"><font-awesome-icon icon="check-circle"/></div>
          <p class="my-4">{{this.messageComp}}</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from '../services/EventService.js'

export default {
  name: 'eventos',
  methods: {
    handleOkAddEvent () {
      this.cleanForms()
      this.showFalse()
      this.getListEvents()
    },
    handleOkComEvent () {
      this.showFalse()
      this.getListEvents()
    },
    validateBeforeSubmitAddEvent () {
      this.isLoading = true
      this.$validator.validateAll().then(result => {
        if (!result) {
          console.log('UserError: ' + JSON.stringify(this.event))
        } else {
          if (this.showAdd) {
            return EventService.post(this.event).then((data) => {
              // console.log('data: ' + JSON.stringify(data))
              if (typeof data.error !== 'undefined') {
                this.modalErrorShow = true
                this.messageError = data.error.detail
              } else {
                this.modalOkShow = true
              }
              this.isLoading = false
            }).catch((error) => {
              this.isLoading = false
              console.log(JSON.stringify(error))
            })
          } else if (this.showMod) {
            this.actualEvent.nombre_evento = this.event.nombre_evento
            this.actualEvent.lugar_evento = this.event.lugar_evento
            this.actualEvent.numero_boletas = this.event.numero_boletas
            console.log('this.actualEvent: ' + JSON.stringify(this.actualEvent))
            return EventService.update(this.actualEvent).then((data) => {
              // console.log('data: ' + JSON.stringify(data))
              if (typeof data.error !== 'undefined') {
                this.modalErrorShow = true
                this.messageError = data.error.detail
              } else {
                this.modalOkShow = true
              }
              this.isLoading = false
            }).catch((error) => {
              this.isLoading = false
              console.log(JSON.stringify(error))
            })
          }
        }
        this.isLoading = false
      })
    },
    comprarBoleto (row) {
      // console.log('Comprar: ' + JSON.stringify(row))
      this.actualEvent = row.item
      if (row.item.numero_boletas > row.item.numero_compradas_boletas) {
        EventService.comprarBoleta(this.actualUser.id_usuario, this.actualEvent.id_evento).then((data) => {
          console.log('data: ' + JSON.stringify(data))
          if (typeof data.error !== 'undefined') {
          } else {
            this.buyT = true
            this.messageComp = 'Boleta comnprada con exito'
            this.modalOkComShow = true
          }
          this.isLoading = false
        }).catch((error) => {
          this.isLoading = false
          console.log(JSON.stringify(error))
        })
      } else {
        this.buyT = false
        this.messageComp = 'No hay mas boletas disponibles para este evento'
        this.modalOkComShow = true
      }
    },
    modificarEvento (row) {
      // console.log('Modificar: ' + JSON.stringify(row))
      this.actualEvent = row.item
      // console.log('this.actualEvent: ' + JSON.stringify(this.actualEvent))
      this.setEvent(this.actualEvent)
      this.showFalse()
      this.showMod = true
    },
    setEvent (evento) {
      this.idEvent = this.actualEvent.id_evento
      this.event.nombre_evento = evento.nombre_evento
      this.event.lugar_evento = evento.lugar_evento
      this.event.numero_boletas = evento.numero_boletas
    },
    agregarEvento () {
      console.log('Agregar: ')
      this.showFalse()
      this.showAdd = true
    },
    showFalse () {
      this.showAdd = false
      this.showMod = false
    },
    cleanForms () {
      this.event.nombre_evento = ''
      this.event.lugar_evento = ''
      this.event.numero_boletas = ''
    },
    goVolver () {
      this.showFalse()
    },
    getUnits: function () {
      let token = localStorage.getItem('token')
      this.actualUser = JSON.parse(localStorage.getItem('user'))
      if (token) {
        console.log('autorizado')
      } else {
        this.$router.push('/login')
      }
      if (this.actualUser.tipo_usuario === 1) {
        this.isPromotor = false
        this.isCliente = true
      } else if (this.actualUser.tipo_usuario === 2) {
        this.isPromotor = true
        this.isCliente = false
      }
      this.getListEvents()
    },
    getListEvents: function () {
      EventService.getList().then((data) => {
        // console.log('data: ' + JSON.stringify(data))
        this.data = data.data
      }).catch((error) => {
        this.isLoading = false
        console.log(JSON.stringify(error))
      })
    }
  },
  beforeMount () {
    this.getUnits()
  },
  data () {
    return {
      actualEvent: '',
      actualUser: '',
      idEvent: '',
      showAdd: false,
      showMod: false,
      buyT: false,
      isPromotor: false,
      isCliente: false,
      modalOkShow: false,
      modalOkComShow: false,
      isLoading: false,
      messageComp: '',
      data: [],
      campos: [
        { key: 'nombre_evento', label: 'Nombre', sortable: true, class: 'text-center' },
        { key: 'numero_boletas', label: 'Total', sortable: true, class: 'text-center' },
        { key: 'numero_compradas_boletas', label: 'Compradas', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Acciones', class: 'text-center' }
      ],
      event: {
        nombre_evento: '',
        lugar_evento: '',
        numero_boletas: ''
      }
    }
  }
}

</script>

<style scoped>
#eventos{

}

.addEventos{
    color: #21375e;
    padding: 5px;
    margin-right: 15px;
    font-weight: 600;
    font-size: 18px;
    float: right;
}
.addEventos:hover{
    cursor: pointer;
    font-size: 19px;
    color: #4383f5;
}
#addEvento span, .addEvento div{
  display: block;
  text-align: left;
}
</style>
