// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  // SSG (Static Site Generation) for Vercel free tier
  ssr: true,

  // Runtime config — env vars
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001',
    },
  },

  // CSS
  css: ['~/assets/css/main.css'],

  // App head
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Jeet Pal — Full Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jeet Pal — Full Stack Developer specialising in Node.js, NestJS, Vue.js, and the MERN stack. Based in Kolkata, India.',
        },
        { property: 'og:title', content: 'Jeet Pal — Full Stack Developer' },
        {
          property: 'og:description',
          content: 'Full Stack Developer | MERN Stack | NestJS | Vue.js | Node.js',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://jeetislive-portfolio.vercel.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jeet Pal — Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Developer | MERN Stack | NestJS | Vue.js | Node.js' },
        { name: 'twitter:image', content: '/og-image.png' },
        { name: 'theme-color', content: '#040C18' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },

  modules: ['@vueuse/nuxt'],
})
