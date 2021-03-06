# json-sitemap
A simple nodejs package to generate sitemap.xml file a json file.

The generated sitemap.xml will follow all the guidelines listed in official schema at [Sitemap Protocol](https://www.sitemaps.org/protocol.html)

## Usage

In it's simplest form, following is how you would add json data and generate sitemap. Please note, calling 'addJsonUrls' will add the data to the package and also returns whether or not the json is validated against the schema.

```js
var {addJsonUrls, generateSiteMap} = require('json-sitemap');
var data = require('./sitemap-data.json');
let addDataResult = addJsonUrls(data);
console.log('validation:', addDataResult);
var sitemap = generateSiteMap({
    domain: 'https://dashboard.covid19fighters.page',
    styleSheet: "default.xsl"
});
console.log(sitemap);
```

Given following json...
```json
[{
    "loc": "/dashboard"
},{
    "loc": "/dashboard/IN-TG/Govt-COVID19-Hosp-Reports/Telangana-ICU-Beds-Availability-Report/",
    "changefreq": "hourly"
},{
    "loc": "/dashboard/IN-TG/Govt-COVID19-Hosp-Reports/Telangana-Oxygen-Beds-Availability-Report/",
    "changefreq": "daily",
    "priority": "0.8"
},{
    "loc": "/dashboard/IN-AP/Covid-Essential-Drug-Stockists-information",
    "changefreq": "monthly",
    "lastmod": "2021-05-30T18:00:00+00:00",
    "priority": "0.7"
},{
    "loc": "/dashboard/IN-OR/Covid-19-Directory-Odisha-Portal",
    "changefreq": "never",
    "lastmod": "2021-05-30T18:00:00+00:00",
    "priority": "0.9",
    "images": [{
        "loc": "https://firebasestorage.googleapis.com/v0/b/perfinmngr.appspot.com/o/images%2Fodishacovid.JPG?alt=media&token=f5bbd0ed-2142-42ad-9a3a-04ac40d1fc8d"
    },{
        "loc": "https://firebasestorage.googleapis.com/v0/b/perfinmngr.appspot.com/o/images%2Fodishacovid.JPG",
        "title": "Covid-19 Directory Odisha"
    },{
        "loc": "https://odishacovid.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F66e0c0e3-df04-4157-8b09-60eb466933a8%2FScreenshot_2021-05-01_at_1.12.47_AM.png",
        "title": "Private COVDI-19 Testing Centres in Bhubaneswar",
        "caption": "Private COVDI-19 Testing Centres in Bhubaneswar"
    },{
        "loc": "https://odishacovid.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdb5fc30f-6225-4717-931b-d92280f6af65%2FScreenshot_2021-05-01_at_1.13.14_AM.png",
        "title": "Government COVDI-19 Testing Centres in Bhubaneswar",
        "caption": "Government COVDI-19 Testing Centres in Bhubaneswar",
        "geo_location": "Bhubaneswar, Odisha, India"
    }]
}]
```
For all the possible values a sitemap can include, refer to [https://www.sitemaps.org/protocol.html#sitemapXMLExample](https://www.sitemaps.org/protocol.html#sitemapXMLExample)

The program will generate a sitemap.xml content as shown below
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- This sitemap was dynamically generated by sitemap-generator, A simple sitemap.xml generator for NodeJs. -->
<?xml-stylesheet type="text/xsl" href="default.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">
    <url>
        <loc>https://dashboard.covid19fighters.page/dashboard</loc>
    </url>
    <url>
        <loc>https://dashboard.covid19fighters.page/dashboard/IN-TG/Govt-COVID19-Hosp-Reports/Telangana-ICU-Beds-Availability-Report/</loc>
        <changefreq>hourly</changefreq>
    </url>
    <url>
        <loc>https://dashboard.covid19fighters.page/dashboard/IN-TG/Govt-COVID19-Hosp-Reports/Telangana-Oxygen-Beds-Availability-Report/</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://dashboard.covid19fighters.page/dashboard/IN-AP/Covid-Essential-Drug-Stockists-information</loc>
        <changefreq>monthly</changefreq>
        <lastmod>2021-05-30T18:00:00+00:00</lastmod>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://dashboard.covid19fighters.page/dashboard/IN-OR/Covid-19-Directory-Odisha-Portal</loc>    
        <changefreq>never</changefreq>
        <lastmod>2021-05-30T18:00:00+00:00</lastmod>
        <priority>0.9</priority>
        <image:image>
            <image:loc>https://firebasestorage.googleapis.com/v0/b/perfinmngr.appspot.com/o/images%2Fodishacovid.JPG?alt=media&amp;token=f5bbd0ed-2142-42ad-9a3a-04ac40d1fc8d</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://firebasestorage.googleapis.com/v0/b/perfinmngr.appspot.com/o/images%2Fodishacovid.JPG</image:loc>
            <image:title>Covid-19 Directory Odisha</image:title>
        </image:image>
        <image:image>
            <image:loc>https://odishacovid.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F66e0c0e3-df04-4157-8b09-60eb466933a8%2FScreenshot_2021-05-01_at_1.12.47_AM.png</image:loc>       
            <image:title>Private COVDI-19 Testing Centres in Bhubaneswar</image:title>
            <image:caption>Private COVDI-19 Testing Centres in Bhubaneswar</image:caption>
        </image:image>
        <image:image>
            <image:loc>https://odishacovid.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdb5fc30f-6225-4717-931b-d92280f6af65%2FScreenshot_2021-05-01_at_1.13.14_AM.png</image:loc>       
            <image:title>Government COVDI-19 Testing Centres in Bhubaneswar</image:title>
            <image:caption>Government COVDI-19 Testing Centres in Bhubaneswar</image:caption>
            <image:geo_location>Bhubaneswar, Odisha, India</image:geo_location>
        </image:image>
    </url>
</urlset>
```

## JSON Data schema
### Url tag schema
Following is the shcema of a base url object. "loc" is required for each url.
```json
{
  "id": "/Url",
  "type": "object",
  "properties": {
    "loc": {"type": "string"},
    "changeFreq": {"type": "string"},
    "lastmod": {"type": "string"},
    "priority": {"type": "string"},
    "images": {
      "type": "array",
      "items": {
        "$ref": "/Image" 
      }
    }
  },
  "required": ["loc"]
}
```

### Image tag shcema
Following is the schema of an image object (inside a url tag, optional). If supplied, "loc" is required for each image.
```json
{
  "id": "/Image",
  "type": "object",
  "properties": {
    "loc": {"type": "string"},
    "title": {"type": "string"},
    "caption": {"type": "string"},
    "geo_location": {"type": "string"},
    "location": {"type": "string"}
  },
  "required": ["loc"]
}
```


### Note
Before submitting the generated sitemap to Google, Bing or search engines. Make sure it validated against offline services like:
. [https://freetools.webmasterworld.com/tools/site-validator/](https://freetools.webmasterworld.com/tools/site-validator/)
. [https://www.mysitemapgenerator.com/service/check.html](https://www.mysitemapgenerator.com/service/check.html)