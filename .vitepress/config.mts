import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Doc Tree",     // 改成你想要的站点名
  description: '学习笔记与技术文档',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // 顶部导航 - 极简
    nav: [
      { text: '主页', link: 'http://106.54.33.219/', target: '_blank' },
      { text: '笔记', link: '/about' }   // "笔记"就是关于页/简介页, 或者改成你常用的入口
    ],

    // 全局统一侧边栏 - 所有路径都显示这套
    sidebar: [
      {
        text: '我是谁',
        link: '/about'
      },
      {
        text: '电子书&文章',
        collapsed: true,    // 默认折叠
        items: [
          { text: '设计模式', link: '/pdfs/design-pattern/tt_dp.pdf' }
        ]
      },
      {
        text: '开源软件',
        collapsed: true,
        items: [
          { text: '简介', link: '/open-source/' },
          {
            text: '数据库',
            collapsed: true,
            items: [
              { text: 'MySQL', link: '/open-source/database/mysql' },
              { text: 'PostgreSQL', link: '/open-source/database/postgresql' },
              { text: 'Redis', link: '/open-source/database/redis' }
            ]
          },
          {
            text: '运维工具',
            collapsed: true,
            items: [
              { text: 'Docker', link: '/open-source/devops/docker' },
              { text: 'Kubernetes', link: '/open-source/devops/k8s' },
              { text: 'Nginx', link: '/open-source/devops/nginx' }
            ]
          },
          {
            text: '消息队列',
            collapsed: true,
            items: [
              { text: 'RabbitMQ', link: '/open-source/mq/rabbitmq' },
              { text: 'Kafka', link: '/open-source/mq/kafka' }
            ]
          }
        ]
    },
      {
        text: 'Linux',
        collapsed: true,
        items: [
          { text: '简介', link: '/linux/' },
          { text: '01 杂笔', link: '/linux/01-mess-note' },
          // { text: '02 使用 Unix Shell', link: '/linux/02-shell' },
          // { text: '03 生物信息学数据', link: '/linux/03-bioinfo' },
          // { text: '04 Unix 数据工具', link: '/linux/04-data-tools' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/Lee_Code_Top' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} Lee`
    },

    outline: {
      level: [2, 3],
      label: 'On this page'   // 改成英文, 跟 juniortree 一致
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})