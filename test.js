/// <reference> node.d.ts
var generateSiteMap = require('./index');
var data = require('./sitemap-data.json');
var sitemap = generateSiteMap(data, {
    styleSheet: "default.xsl"
});
console.log(sitemap);
