<template>
  <div id="principal" class="centrar">
    <div>
      <div class="outter" style="display: inline-block;"><img src="../assets/logo.png" class="image-circle" /></div>
    </div>
    <div style="font-size: 70px;">
      Bienvenido
    </div>
    <div style="color: #21375e; font-size: 50px;">
      {{user}}
    </div>
    <div>
      <div class="" style="display: inline-block;"><img src="../assets/ticket.jpg" class="image-circle" /></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'principal',
  methods: {
    getUnits: function () {
      let token = localStorage.getItem('token')
      let data = JSON.parse(localStorage.getItem('user'))
      this.user = data.nombre_usuario.split(' ')[0]
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
      user: ''
    }
  }
}

</script>

<style scoped>
#principal{

}
</style>
