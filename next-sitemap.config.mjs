const NEXT_SSG_FILES = [
    '/*.json$',
    '/*_buildManifest.js$',
    '/*_middlewareManifest.js$',
    '/*_ssgManifest.js$',
    '/*.js$',
    '/api/*',
    '/api$',
];

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://mksm-cheat-collections.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/404', '/api*', '/api/*'],
    robotsTxtOptions: {
        policies: [{
            userAgent: "*",
            disallow: NEXT_SSG_FILES
        }]
    },
    transform: async (config, path) => {
        if (path.includes('/')) {
            return {
                loc: path, // URL
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }
        return {
            loc: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
}



export default config;
