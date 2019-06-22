<template>
  <div id="principal">
    s
  </div>
</template>

<script>

export default {
  name: 'principal',
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
  }
}

</script>

<style scoped>
#principal{

}
</style>
