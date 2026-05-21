function withStoreConfig(nextConfig = {}) {
  const features = nextConfig.features || {}
  delete nextConfig.features

  nextConfig.env = nextConfig.env || {}

  Object.entries(features).forEach(([key, value]) => {
    if (value) {
      // Next.js expects env values to be strings; serialize booleans to strings
      nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = String(value)
    }
  })

  return nextConfig
}

module.exports = { withStoreConfig }
