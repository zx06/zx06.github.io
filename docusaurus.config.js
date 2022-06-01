// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "zx06",
  tagline: "我的博客和文档站",
  url: "https://blog.xuzhuo.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zx06", // Usually your GitHub org/user name.
  projectName: "zx06.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zx06/zx06.github.io/edit/main/",
        },
        blog: {
          blogSidebarTitle: "全部博文",
          showReadingTime: true,
          blogSidebarCount: "ALL", // [ALL, number]
          postsPerPage: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zx06/zx06.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      umami: {
        websiteid: "9b24aa2f-1e38-4893-a7c8-3a28c6c567fd", // Insctructions below on how to find this
        src: "https://umami.xuzhuo.xyz/umami.js", // Instructions below on how to find this
      },
      navbar: {
        title: "zx06",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "文档",
          },
          { to: "/blog", label: "博客", position: "left" },
          {
            href: "https://github.com/zx06",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "我的网站",
            items: [
              {
                label: "博客访问量统计",
                to: "https://umami.xuzhuo.xyz/share/uvNw2ixg/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "docusaurus",
                href: "https://docusaurus.io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blog, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["docker", "java"],
      },
    }),
  plugins: ["docusaurus-plugin-umami"],
};

module.exports = config;
