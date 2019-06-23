<template>
    <div id="login">
        <div class="background"></div>
        <div class="container">
            <div class="row login_box">
                <div class="col-md-12 col-xs-12" align="center" style="padding: 0px;">
                    <div class="line" style="padding: 5px;">
                        <h4 class="titlebox">tuEvento.com</h4>
                    </div>
                    <div class="outter"><img src="../assets/logo.png" class="image-circle" /></div>
                </div>
                <div class="col-md-12 col-xs-12 login_control">
                    <div v-if="isLoading" class="centrar" style="margin: 10px; width: 100%">
                      <div class="lds-ripple"><div></div><div></div></div>
                    </div>
                    <form v-if="!isLoading" id="loginForm" @submit.prevent="validateBeforeSubmit()">
                       <div class="control">
                            <div class="label">Email:</div>
                            <input type="text" v-validate="'required|email'" name="email" v-model="user.email_usuario" class="form-control" placeholder="admin@mail.com" />
                            <span class="error" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                        </div>
                        <div class="control">
                            <div class="label">Password:</div>
                            <input v-validate="'required'" name="password" type="password" v-model="user.pass" class="form-control" placeholder="123456" ref="password"/>
                            <span class="error" v-if="errors.has('password')">{{ errors.first('password') }}</span>
                        </div>
                        <div class="centrar">
                            <div class="buttonDiv">
                                <div>
                                    <button class="btn btn-blue" type="submit">Signin</button>
                                </div>
                                <div>
                                    <button class="btn btn-red" @click="goRegistro()">Singup</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <b-modal id="modalError" v-model="modalErrorShow" title="Error al registrar usuario" ok-only>
                      <div class="containerFontAwesome errorFA largeFA"><font-awesome-icon icon="exclamation-circle"/></div>
                      <p class="my-4">{{messageError}}</p>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginService from '../services/LoginService.js'
var md5 = require('md5')

export default {
  name: 'login',
  methods: {
    goRegistro: function () {
      this.$router.push('/register')
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
          return LoginService.auth(this.user).then((data) => {
            console.log('data: ' + JSON.stringify(data))
            if (typeof data.error !== 'undefined') {
              this.modalErrorShow = true
              this.messageError = data.error.detail
            } else {
              localStorage.setItem('token', data.token)
              localStorage.setItem('user', JSON.stringify(data.data))
              this.$router.push('/principal')
            }
            this.isLoading = false
          }).catch((error) => {
            this.isLoading = false
            this.modalErrorShow = true
            this.messageError = 'Contraseña o email incorrectos'
            console.log(JSON.stringify(error))
          })
        }
        this.isLoading = false
      })
    },
    getUnits: function () {
      let token = localStorage.getItem('token')
      if (token) {
        this.$router.push('/principal')
      } else {
        console.log('NO autorizado')
      }
    }
  },
  beforeMount () {
    this.getUnits()
  },
  data () {
    return {
      messageError: '',
      modalErrorShow: false,
      isLoading: false,
      user: {
        email_usuario: '',
        pass: '',
        pass_usuario: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
