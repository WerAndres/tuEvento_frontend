import Login from './components/Login'
import Register from './components/Register'
import Principal from './components/Principal'
import Perfil from './components/Perfil'
import Eventos from './components/Eventos'
import MisBoletos from './components/MisBoletos'

const routes = [
  { path: '/', component: Login, name: '', meta: { showNavigation: false } },
  { path: '/register', component: Register, name: 'Register', meta: { showNavigation: false } },
  { path: '/login', component: Login, name: 'Login', meta: { showNavigation: false } },
  { path: '/principal', component: Principal, name: 'principal', meta: { showNavigation: true } },
  { path: '/perfil', component: Perfil, name: 'perfil', meta: { showNavigation: true } },
  { path: '/eventos', component: Eventos, name: 'eventos', meta: { showNavigation: true } },
  { path: '/mis-boletos', component: MisBoletos, name: 'mis boletos', meta: { showNavigation: true } }
]
export default routes
