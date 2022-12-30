// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'nevra studio',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Nevra Studio' },
                { hid: 'og:title', property: 'og:title', content: 'nevra studio' }, /* Share card title */
                { hid: 'og:description', property: 'og:description', content: 'Nevra Studio - Interior Design' }, /* Share card description */
                { hid: 'og:image', property: 'og:image', content: 'og-image.jpg' } /* Share card image */
            ]
        }
    },
    modules: [
        'nuxt-icon',
        '@nuxtjs/tailwindcss'
    ],
    /**
    * * Tailwind CSS Config
    * Options: https://tailwindcss.nuxt.dev/getting-started/options/
    * Docs: https://tailwindcss.nuxt.dev
    */
    tailwindcss: {
        cssPath: '~/assets/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
        injectPosition: 0,
        viewer: true, // set up the /_tailwind/ route. (Disable in production) https://tailwindcss.nuxt.dev/getting-started/options/#viewer
    },
})
