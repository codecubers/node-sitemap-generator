export declare enum FREQUENCY {
  always = "always",
  hourly = "hourly",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
  yearly = "yearly",
  never = "never"
}
export declare type SiteMapGeneratorConfig = {
  styleSheet?: string;
};
export declare type Image = {
  loc: string;
  title?: string;
  caption?: string;
  geo_location?: string;
  license?: string;
};
export declare type Page = {
  loc: string;
  changefreq?: string;
  lastmod?: string;
  priority?: string | number;
  images?: Image[];
};
export declare function addJsonUrls(data: []): string;
export declare function generateSiteMap(config?: SiteMapGeneratorConfig): string;
export declare const getLocation: (loc: string, cdata?: boolean) => string;
export declare const getChangeFreq: (freq?: FREQUENCY, cdata?: boolean) => string;
export declare const getLastModified: (mod?: string, cdata?: boolean) => string;
export declare const getPriority: (priority?: number, cdata?: boolean) => string;
export declare const getStyleSheet: (stylesheet?: string) => string;
export declare function getImageTags(page: Page): any;
export declare function generatePageTags(pages: Page[]): any;
