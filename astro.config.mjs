import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mi8.be',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
