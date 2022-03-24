module.exports = {
    meili: {
      host: process.env.MEILI_HOST,
      apiKey: process.env.MEILI_API_KEY,
      index: process.env.MEILI_INDEX,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY,
      index: process.env.ALGOLIA_INDEX,
    },
  };