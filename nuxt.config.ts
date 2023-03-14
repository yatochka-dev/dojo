// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    modules: [
        "@nuxtjs/tailwindcss",
    ],
    app: {
        head: {
            title: "Nuxt Dojo",
            meta: [
                {
                    name: "description",
                    content: "Everything you need to know about Nuxt.js",
                }
            ],
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    }
})
