/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  basePath: isProd ? "/contributiontowomenandchildren" : "",
  assetPrefix: isProd ? "/contributiontowomenandchildren/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
