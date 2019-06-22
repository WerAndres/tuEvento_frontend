import Login from './components/Login'
import Register from './components/Register'
import Principal from './components/Principal'
import Perfil from './components/Perfil'

const routes = [
  { path: '/', component: Login, name: '', meta: { showNavigation: false } },
  { path: '/register', component: Register, name: 'Register', meta: { showNavigation: false } },
  { path: '/login', component: Login, name: 'Login', meta: { showNavigation: false } },
  { path: '/principal', component: Principal, name: 'principal', meta: { showNavigation: true } },
  { path: '/perfil', component: Perfil, name: 'perfil', meta: { showNavigation: true } }
]
export default routes
