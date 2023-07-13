// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Hai, Saya Hadi Prasetyo";
export const SITE_DESCRIPTION =
  "Situs ini berisi informasi tentang saya, tulisan, opini dan kebanyakan adalah dokumentasi untuk saya pribadi ketika sedang belajar atau membagikan sesuatu.";
export const TWITTER_HANDLE = "@hadipsy27";
export const MY_NAME = "Hadi Prasetyo";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
