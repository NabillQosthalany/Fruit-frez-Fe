// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import 'typeface-poppins';

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            options: {
                customProperties: true,
            },
            defaultFont: 'Poppins, sans-serif',
        },
    }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

)
