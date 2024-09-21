const NEXT_SSG_FILES = [
    '/*.json',
    '/*_buildManifest.js',
    '/*_middlewareManifest.js',
    '/*_ssgManifest.js',
    '/*.js',
];

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://mksm-cheat-collections.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/404', '/api'], // hanya mengecualikan '/api'
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ['/api', ...NEXT_SSG_FILES], // men-disallow hanya '/api' dan file SSG
            },
        ],
    },
    transform: async (config, path) => {
        console.log('Generating sitemap for:', path); // Debugging log
        
        // Set priority dan frekuensi perubahan sesuai rute
        const isHomePage = path === '/';
        return {
            loc: path,
            changefreq: isHomePage ? 'weekly' : 'daily',
            priority: isHomePage ? 0.8 : 0.7,
            lastmod: new Date().toISOString(),
        };
    },
};

export default config;
