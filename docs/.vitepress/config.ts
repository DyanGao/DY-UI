export default {
  themeConfig: {
    siteTitle: 'DyUI',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/components/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DyanGao' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            {text: 'Two', link: '/guide/two'},
          ]
        }
      ],
      '/components/': [
        {
          text: 'Basic Components',
          items: [
           
            { text: 'Button', link: '/components/button/index.md' },
            {text: 'Input', link: '/components/input/index.md'}  
          ]
        }
      ],
    }
  }
}