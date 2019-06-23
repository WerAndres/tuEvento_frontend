<template>
  <div id="register">
    <div class="background"></div>
    <div class="container">
        <div class="row login_box">
            <div class="col-md-12 col-xs-12" align="center" style="padding: 0px">
              <div class="line">
                <h4 class="titlebox">Registro de nuevos usuarios</h4>
              </div>
            </div>
            <div v-if="isLoading" class="centrar" style="margin: 10px; width: 100%">
              <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div v-if="!isLoading" class="col-md-12 col-xs-12 login_control">
              <form id="registro" @submit.prevent="validateBeforeSubmit()">
                <div class="control">
                    <div class="label">Nombre:</div>
                    <input type="text" v-validate="'required'" name="nombre" v-model="user.nombre_usuario" class="form-control" placeholder="Nombre" />
                    <span class="error" v-if="errors.has('nombre')">{{ errors.first('nombre') }}</span>
                </div>
                <div class="control">
                  <div class="label">Tipo de usuario:</div>
                  <b-form-select  v-validate="'required'" name="tipoUsuario" v-model="user.tipo_usuario" :options="optionsUsuario">
                    <template slot="first">
                      <option :value="null" disabled>-- Por favor seleccione una opción --</option>
                    </template>
                  </b-form-select>
                  <span class="error" v-if="errors.has('tipoUsuario')">{{ errors.first('tipoUsuario') }}</span>
                </div>
                <div class="control">
                  <div class="label">Tipo de identificación:</div>
                  <b-form-select  v-validate="'required'" name="tipoIdentificacion" v-model="user.tipo_identificacion" :options="optionsDocumento">
                    <template slot="first">
                      <option :value="null" disabled>-- Por favor seleccione una opción --</option>
                    </template>
                  </b-form-select>
                  <span class="error" v-if="errors.has('tipoIdentificacion')">{{ errors.first('tipoIdentificacion') }}</span>
                </div>
                <div class="control">
                    <div class="label">Número de identificación:</div>
                    <input type="text" v-mask="'###############'" v-validate="'required'" name="identificacionUsuario" v-model="user.identificacion_usuario" class="form-control" placeholder="123456789" />
                    <span class="error" v-if="errors.has('identificacionUsuario')">{{ errors.first('identificacionUsuario') }}</span>
                </div>
                <div class="control">
                    <div class="label">Email:</div>
                    <input type="text" v-validate="'required|email'" name="email" v-model="user.email_usuario" class="form-control" placeholder="admin@mail.com" />
                    <span class="error" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
                <div class="control">
                    <div class="label">Fecha de nacimiento:</div>
                    <datepicker v-validate="'required'" v-model="user.fecha_nacimiento_usuario" name="fechaNacimiento" class="form-control" placeholder="Selecciona una fecha"></datepicker>
                    <span class="error" v-if="errors.has('fechaNacimiento')">{{ errors.first('fechaNacimiento') }}</span>
                </div>
                <div class="control">
                    <div class="label">Password:</div>
                    <input v-validate="'required'" name="password" type="password" v-model="user.pass" class="form-control" placeholder="123456" ref="password"/>
                    <span class="error" v-if="errors.has('password')">{{ errors.first('password') }}</span>
                </div>

                <div class="control">
                    <div class="label">Repeat Password:</div>
                    <input v-validate="'required|confirmed:password'" name="confirmPassword" type="password" class="form-control" data-vv-as="password" placeholder="123456" />
                    <span class="error" v-if="errors.has('confirmPassword')">{{ errors.first('confirmPassword') }}</span>
                </div>

                <div class="centrar">
                    <div>
                      <button class="btn btn-blue" type="submit">Aceptar</button>
                    </div>
                </div>
              </form>
              <b-modal id="modalError" v-model="modalErrorShow" title="Error al registrar usuario" ok-only>
                <div class="containerFontAwesome errorFA largeFA"><font-awesome-icon icon="exclamation-circle"/></div>
                <p class="my-4">{{messageError}}</p>
              </b-modal>
              <b-modal id="modalOK" v-model="modalOkShow" title="El usuario fue registrado con exito" ok-only @ok="handleOk">
                <div class="containerFontAwesome okFA largeFA"><font-awesome-icon icon="check-circle"/></div>
                <p class="my-4">El usuario fue registrado con exito</p>
              </b-modal>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import RegisterService from '../services/RegisterService.js'
var md5 = require('md5')

export default {
  name: 'register',
  components: {
    Datepicker
  },
  methods: {
    handleOk (bvModalEvt) {
      this.$router.push('/login')
    },
    validateBeforeSubmit () {
      this.isLoading = true
      this.$validator.validateAll().then(result => {
        if (!result) {
          console.log('UserError: ' + JSON.stringify(this.user))
        } else {
          this.user.pass_usuario = md5(this.user.pass)
          this.user.pass = ''
          // console.log('User: ' + JSON.stringify(this.user))
          return RegisterService.post(this.user).then((data) => {
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
        this.isLoading = false
      })
    }
  },
  data () {
    return {
      messageError: '',
      modalErrorShow: false,
      modalOkShow: false,
      isLoading: false,
      user: {
        nombre_usuario: '',
        tipo_usuario: '',
        identificacion_usuario: '',
        tipo_identificacion: '',
        email_usuario: '',
        pass: '',
        pass_usuario: '',
        fecha_nacimiento_usuario: ''
      },
      optionsDocumento: [
        { value: '1', text: 'Cédula de ciudadanía' },
        { value: '2', text: 'Cédula de extranjería' }
      ],
      optionsUsuario: [
        { value: '1', text: 'Cliente' },
        { value: '2', text: 'Promotor' }
      ]
    }
  }
}

</script>

<style scoped>

#register{

}
</style>
