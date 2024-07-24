import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@patternfly/elements/pf-modal/pf-modal.js'
import '@patternfly/elements/pf-card/pf-card.js'
import '@patternfly/elements/pf-table/pf-table.js'
import '@patternfly/elements/pf-select/pf-select.js'
import '@patternfly/elements/pf-select/pf-option-group.js'
import '@patternfly/elements/pf-button/pf-button.js'
import '@patternfly/elements/pf-icon/pf-icon.js'
import '@rhds/elements/rh-card/rh-card.js'
import '@rhds/elements/rh-cta/rh-cta.js'
import '@rhds/elements/rh-accordion/rh-accordion.js'

const app = createApp(App)

app.mount('#app')
