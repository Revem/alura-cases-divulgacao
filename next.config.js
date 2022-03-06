module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq',
        permanent: true,
      },
    ]
  },
}
