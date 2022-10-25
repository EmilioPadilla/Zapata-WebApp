/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  swcMinify: true,
  env: {
    // Reference a variable that was defined in the .env.* file and make it available at Build Time
    VERSION: process.env.VERSION,
    API: process.env.API,
  },
};
