module.exports = {
    siteUrl: 'https://fundiin.vn',
    additionalPaths: async (config) => {
        const fields = [
            {
              loc: 'https://fundiin.vn/',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/instruction/huong-dan-mua-hang',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/instruction/huong-dan-thanh-toan',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/policy/chinh-sach-chung',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/policy/co-che-dat-hang-truc-tuyen',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/policy/co-che-thanh-toan-truc-tuyen',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/policy/hop-dong-mua-ban-phieu-mua-hang-tra-cham',
              lastmod: new Date().toISOString()
            },
            {
                loc: 'https://fundiin.vn/policy/privacy',
                lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/news',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/categories',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/about-fundiin',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/faq',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/contact',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/download-app',
              lastmod: new Date().toISOString()
            },
            {
              loc: 'https://fundiin.vn/thong-tin-chung',
              lastmod: new Date().toISOString()
            },
          ]
          return fields;
    },
    generateRobotsTxt: true,
    exclude: ['/sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://fundiin.vn/sitemap.xml", // <==== Add here
    ],
  },
};
