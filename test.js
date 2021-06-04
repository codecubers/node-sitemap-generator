/// <reference> node.d.ts
var {addJsonUrls, generateSiteMap} = require('./index');
var data = require('./sitemap-data.json');
console.log('validation:', addJsonUrls(data));
var sitemap = generateSiteMap({
    styleSheet: "default.xsl"
});
console.log(sitemap);
