/// <reference> node.d.ts
var {addJsonUrls, generateSiteMap} = require('../index');
var data = require('./sitemap-data.json');
console.log('validation:', addJsonUrls(data));
var sitemap = generateSiteMap({
    domain: 'https://dashboard.covid19fighters.page',
    styleSheet: "default.xsl"
});
console.log(sitemap);
