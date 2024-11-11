import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: "Anthony Bùi Lê Tuấn Anh",
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
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        language: ["vi", "en"],
        hashed: true,
        searchResultLimits: 5,
        searchBarShortcutHint: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
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
          label: "Giới thiệu",
          to: "/docs/intro",
          position: "left",
        },
        {
          label: "Station",
          href: "https://station.builetuananh.name.vn",
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
        "⭐ <b>Thông báo</b>: Theo dõi series 90 ngày DevOps trên website <b>90days.builetuananh.name.vn</b> (Catch up with 90Days on our official website.) ⭐",
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
              to: "/docs/intro",
            },
            {
              label: "Collab Station",
              href: "https://station.builetuananh.name.vn",
            },
            {
              label: "Tài liệu tham khảo",
              to: "/docs/resources",
            },
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
              label: "Dịch vụ khác",
              to: "/services",
            },
          ]
        }
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
