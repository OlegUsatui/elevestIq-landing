
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/elevestIq-landing' : '',
  assetPrefix: isProd ? '/elevestIq-landing/' : '',
  trailingSlash: true,
}
