import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tino Emer",
  description: "A poor dev observations",
  themeConfig: {
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coming soon', link: '/placeholder' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'Home', link: '/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vexonius/blog' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/etino/' }
    ],
  }
})
