require("dotenv").config();
const AlgoliaSearch = require("algoliasearch");
const { MeiliSearch } = require("meilisearch");
const config = require("./config");

const BATCH_SIZE = 1000;

const algoliaClient = AlgoliaSearch(
  config.algolia.appId,
  config.algolia.adminApiKey
);

(async () => {
  console.log("Migration Started");

  const algoliaIndex = algoliaClient.initIndex(config.algolia.index);
  let records = [];
  await algoliaIndex
    .browseObjects({
      batch: (objects) => {
        let modifiedObjects = objects.map((i) => ({
          ...i,
          "address.country": i.address.country,
          address: undefined,
        }));
        
        records = records.concat(modifiedObjects);
      },
    })
    .then(async () => {
      
      const meiliClient = new MeiliSearch({
        host: config.meili.host,
        apiKey: config.meili.apiKey,
      });

      const meiliIndex = meiliClient.index(config.meili.index);

      meiliIndex.updateSettings({
        searchableAttributes: ["name", "address.country"],
        displayedAttributes: ["name", "age"]
      });

      return meiliIndex.addDocumentsInBatches(records, BATCH_SIZE);
    })
    .then(() => {
      console.log("Successfully Migrated Data From Algolia To Meilisearch");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("Migration Ended");
})();