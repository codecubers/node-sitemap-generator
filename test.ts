/// <reference> node.d.ts
import generateSiteMap = require('./index');
import * as data from './sitemap-data.json';
let sitemap = generateSiteMap(data, {
  styleSheet: "default.xsl"
});
console.log(sitemap)