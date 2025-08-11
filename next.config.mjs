/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/girard-boosters' : '',
  assetPrefix: isProd ? '/girard-boosters/' : '',
};
export default nextConfig;
