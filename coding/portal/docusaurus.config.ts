import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: "Portal - Anthony Bùi Lê Tuấn Anh",
  tagline: "❤ Hữu xạ tự nhiên hương ❤",
  url: "https://portal.builetuananh.name.vn",
  baseUrl: "/",
  staticDirectories: ["public"],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.png",
  organizationName: "anthony2708", // Usually your GitHub org/user name.
  projectName: "anthony2708", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    localeConfigs: {
      vi: {
        htmlLang: "vi-VN",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: "Station",
            description: "Khơi nguồn cảm hứng văn chương...",
            copyright: `Copyright © ${new Date().getFullYear()} Anthony Bùi Lê Tuấn Anh.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 5 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 5),
                ...rest,
              });
            },
          },
          routeBasePath: '/station',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'Station',
          blogDescription: 'Khơi nguồn cảm hứng văn chương...',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        language: ["vi", "en"],
        hashed: true,
        searchResultLimits: 5,
        searchBarShortcutHint: false,
        // highlightSearchTermsOnTargetPage: true,
      },
    ],[
      '@docusaurus/plugin-pwa',
      {
        // debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon/ET_Logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(255, 237, 174)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon/ET_Logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/favicon/ET_Logo.png',
            color: 'rgb(255, 237, 174)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon/favicon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ]
  ],

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "BLTA",
      logo: {
        alt: "Logo",
        src: "img/favicon/ET_Logo.png",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          label: "Trang chủ",
          href: "https://www.builetuananh.name.vn",
          position: "left",
        },
        {
          label: "Station",
          to: "/station",
          position: "left",
        },
        {
          label: "Dịch vụ",
          position: "left",
          to: "/services",
        },
      ],
    },
    announcementBar: {
      id: "announcement-bar",
      content:
        "⭐ <b>Thông báo</b>: Theo dõi series 90 ngày DevOps trên website <b>www.builetuananh.name.vn</b> (Catch up with 90Days on our official website.) ⭐",
      backgroundColor: "#a4e4dc",
      textColor: "#222",
      // backgroundColor: "#222",
      // textColor: "#fff",
      isCloseable: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Trang chủ",
          items: [
            {
              label: "Giới thiệu cá nhân",
              href: "https://linkedin.com/in/anthony2708",
            },
            {
              label: "Collab Station",
              to: "/station"
            },
            {
              label: "Tài liệu tham khảo",
              href: "https://shorturl.at/kduuJ",
            },
            {
              label: "Về website chính thức",
              href: "https://www.builetuananh.name.vn"
            }
          ],
        },
        {
          title: "Cổng dịch vụ",
          items: [
            {
              label: "URL Shortener",
              to: "/services/url",
            },
            {
              label: "English L&T",
              to: "/services/courses",
            },
            {
              label: "Kho lưu trữ ảnh",
              to: "/services/gallery",
            },
          ]
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anthony Bùi Lê Tuấn Anh. Built with ❤ & <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["docker", "csharp", "bash", "java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
