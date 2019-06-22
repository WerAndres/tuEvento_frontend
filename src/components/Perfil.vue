<template>
  <div id="perfil">
    <div class="container">
      <div class="imgProfile">
        <img src="url_foto_usuario"/>
      </div>
      <div class="info">
        <div class="infoText">
          <div class="titleText">
            tipo_usuario:
          </div>
          <div class="dataText">
            tipo_usuario
          </div>
        </div>
        <div class="infoText">
          <div class="titleText">
            tipo_identificacion:
          </div>
          <div class="dataText">
            tipo_identificacion
          </div>
        </div>
        <div class="infoText">
          <div class="titleText">
            identificacion_usuario:
          </div>
          <div class="dataText">
            identificacion_usuario
          </div>
        </div>
        <div class="infoText">
          <div class="titleText">
            nombre_usuario:
          </div>
          <div class="dataText">
            nombre_usuario
          </div>
        </div>
        <div class="infoText">
          <div class="titleText">
            email_usuario:
          </div>
          <div class="dataText">
            email_usuario
          </div>
        </div>
        <div class="infoText">
          <div class="titleText">
            fecha_nacimiento_usuario:
          </div>
          <div class="dataText">
            fecha_nacimiento_usuario
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'perfil',
  methods: {
    getUnits: function () {
      let token = localStorage.getItem('token')
      if (token) {
        console.log('autorizado')
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
      img: null,
      tipo_usuario: '',
      tipo_identificacion: '',
      identificacion_usuario: '',
      nombre_usuario: '',
      tipo_identificacion: '',
      email_usuario: '',
      fecha_nacimiento_usuario: ''
    }
  }
}

</script>

<style scoped>
#principal{

}
</style>
