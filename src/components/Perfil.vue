<template>
  <div id="perfil">
    <div class="container centrar">
      <div class="containerProfile col-md-12">
        <div class="imgProfileContainer col-md-12 centrar">
           <div class="titleBox centrar">
              Perfil de {{nombre_usuario}}
          </div>
          <div class="imgProfile">
            <img :src="this.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz0P8-U_r5zM_duGMB4JY0SLpk6hvbT5aJ6fty0cxlHblGOSr'"/>
          </div>
        </div>
        <div class="info col-md-12 centrar">
          <div class="containerInfoText">
            <div class="infoText">
              <div class="titleText">
                Tipo usuario:
              </div>
              <div class="dataText">
                {{tipo_usuario}}
              </div>
            </div>
            <div class="infoText">
              <div class="titleText">
                Tipo identificación:
              </div>
              <div class="dataText">
                {{tipo_identificacion}}
              </div>
            </div>
            <div class="infoText">
              <div class="titleText">
                Identificación:
              </div>
              <div class="dataText">
                {{identificacion_usuario}}
              </div>
            </div>
            <div class="infoText">
              <div class="titleText">
                Nombre:
              </div>
              <div class="dataText">
                {{nombre_usuario}}
              </div>
            </div>
            <div class="infoText">
              <div class="titleText">
                Email:
              </div>
              <div class="dataText">
                {{email_usuario}}
              </div>
            </div>
            <div class="infoText">
              <div class="titleText">
                Fecha de nacimiento:
              </div>
              <div class="dataText">
                {{fecha_nacimiento_usuario}}
              </div>
            </div>
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
        var data = JSON.parse(localStorage.getItem('user'))
        this.img = data.url_foto_usuario
        this.tipo_usuario = data.tipo_usuario === 1 ? 'Cliente' : (data.tipo_usuario === 2 ? 'Promotor' : 'Sin documento')
        this.tipo_identificacion = data.tipo_identificacion === 1 ? 'Cédula de ciudadanía' : (data.tipo_identificacion === 2 ? 'Cédula de extranjería' : 'Sin documento')
        this.identificacion_usuario = data.identificacion_usuario
        this.nombre_usuario = data.nombre_usuario
        this.email_usuario = data.email_usuario
        this.fecha_nacimiento_usuario = data.fecha_nacimiento_usuario.substr(0, 10)
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
      email_usuario: '',
      fecha_nacimiento_usuario: ''
    }
  }
}

</script>

<style scoped>
#perfil{

}
.containerProfile {
    display: inline-block;
    padding: 20px;
    background: #EEEEEE;
    border-radius: 10px;
    margin: 20px;
    -webkit-box-shadow: 5px 5px 10px -2px rgba(0,0,0,0.5);
    -moz-box-shadow: 5px 5px 10px -2px rgba(0,0,0,0.5);
    box-shadow: 5px 5px 10px -2px rgba(0,0,0,0.5);
    max-width: 700px;
    margin: 20px auto;
}

.containerProfile .imgProfileContainer {
    display: inline-block;
    background: #F3F3F3;
    border-radius: 10px;
}
.containerProfile .imgProfileContainer .imgProfile{
    width: 100%;
    padding: 10px;
}
.containerProfile .imgProfileContainer .imgProfile img {
    width: 150px;
    border-radius: 50%;
}
.containerProfile .info {
    display: inline-block;
    padding: 10px;
    width: 100%;
}
.containerProfile .info .containerInfoText {
    display: inline-block;
}
.containerProfile .info .containerInfoText .infoText {
    display: inline-block;
    clear: both;
    float: left;
}
.containerProfile .info .containerInfoText .infoText .titleText {
    font-weight: 600;
    margin-right: 15px;
    float: left;
}
.containerProfile .info .containerInfoText .infoText .dataText {
    float: left;
}
</style>
