module.exports = {
  title: 'Docs DevBlinders',
  tagline: 'Documentación de módulos y temas de DevBlinders',
  url: 'https://docs.devblinders.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'DevBlinders', // Usually your GitHub org/user name.
  projectName: 'devblinders-kb', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Agencia de Expertos en PrestaShop',
        src: 'img/logo-devblinders-negro.png',
        href: 'https://devblinders.com/es/',
        target: '_blank',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://devblinders.com/es/aviso-legal/">Aviso legal y Protección de datos</a> - <a href="https://devblinders.com/es/politica-de-cookies/">Política de Cookies</a> - <a href="https://www.youtube.com/channel/UCO_DK9hrDZ-WXYK8sbtu3ig" target="_blank" rel="me" title="Canal de eCommerce y SEO de DevBlinders">DevBlinders en YouTube</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
