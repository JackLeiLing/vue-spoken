import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

// Import the Auth0 configuration
import { domain, clientId } from './auth_config.json'

// Import the plugin here
import { Auth0Plugin } from './auth'



// Install the authentication plugin here
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        console.log(appState)
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        )
    },
})

Vue.config.productionTip = false

Vue.use(VueAnimateOnScroll)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
