import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@rhds/elements/rh-card/rh-card.js'
import '@rhds/elements/rh-cta/rh-cta.js'
import '@rhds/elements/rh-accordion/rh-accordion.js'
import '@patternfly/elements/pf-modal/pf-modal.js'
import '@patternfly/elements/pf-card/pf-card.js'

const app = createApp(App)

app.mount('#app')
