import Vue from 'vue'
import App from './app/'
import store from './store'

import {firebaseApp} from './firebaseApp'
import router from './routes'

firebaseApp.auth().onAuthStateChanged(user => {
	if(user){
		store.dispatch('login', user)
		router.push('/dashboard')
	} else {
		router.replace('/')
	}
});

if(store.state.user) {
    router.push('/dashboard')
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
