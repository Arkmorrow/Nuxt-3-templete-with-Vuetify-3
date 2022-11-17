import legacy from '@vitejs/plugin-legacy'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
        'process.env.DEBUG': false,
        },

        plugins: [
          legacy({
            targets: ['defaults', 'not IE 11']
          })
        ]
    },

})
