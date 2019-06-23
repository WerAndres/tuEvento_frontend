<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click="goPrincipal()">tuEvento.com</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="goEventos()">Eventos</b-nav-item>
        <b-nav-item @click="goMisBoletos()">Mis Boletos</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em><div class="rol">{{rol}}: </div><div class="nameUser">{{nameUser}}</div><img class="avatar" :src="this.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz0P8-U_r5zM_duGMB4JY0SLpk6hvbT5aJ6fty0cxlHblGOSr'"/></em></template>
          <b-dropdown-item @click="goPerfil()">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()" href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    goPerfil () {
      this.$router.push('/perfil')
    },
    goPrincipal () {
      this.$router.push('/principal')
    },
    goEventos () {
      this.$router.push('/eventos')
    },
    goMisBoletos () {
      this.$router.push('/mis-boletos')
    },
    getUnits: function () {
      let data = JSON.parse(localStorage.getItem('user'))
      this.img = data.url_foto_usuario
      this.rol = data.tipo_usuario === 1 ? 'Cliente' : (data.tipo_usuario === 2 ? 'Promotor' : 'SIN ROL')
      this.nameUser = data.nombre_usuario === null ? data.email_usuario : data.nombre_usuario
    }
  },
  beforeMount () {
    this.getUnits()
  },
  data () {
    return {
      img: null,
      rol: '',
      nameUser: ''
    }
  }
}
</script>
<style>
img.avatar {
    border-radius: 50%;
    width: 35px;
    height: 35px;
}
.rol {
    display: inline-block;
    margin-right: 10px;
    font-style: initial;
    color: #FAFAFA;
    font-weight: 600;
}
.nameUser {
    display: inline-block;
    margin-right: 20px;
    font-style: initial;
    color: #e0e0e0;
}
</style>
