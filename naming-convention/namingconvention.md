# Naming Conventions

## Similarities

1. Schema Less
2. Support All [JSON Types](https://www.w3schools.com/js/js_json_datatypes.asp)
3. An index is a collection of documents/records.
4. An index is automatically created whenever the first document is added.
5. Both operate **asynchronously**
6. Similar Query Response

## Advantages of Meilisearch

| Algolia | Meilisearch |
| --- | --- |
| Fixed Primary Key i.e objectID | Flexible Primary key selection |
| Support JSON data format | Support JSON, NDJSON and CSV formats |
| Support one sorting rule per index.  | Support more than one sorting attribute. |
| Does not support ORoperation across multiple fields | Support complex filter queries with SQL-like syntax. |
| Maximum 1000 indexes allowed | No Limit on number of indexes |
| Require Algolia Hosting | Self-hosted |
|  |  |

## Terminology

| Algolia | Meilisearch |
| --- | --- |
| Every JSON object you index is called a record | Every JSON object you index is called a Document |
| Collection of records is called Index | Collection of documents is called Index |
| Distributed Search Network | Search Delivery Network (in Meilisearch Cloud) |
|  |  |

## Features Mapping

| Algolia | Meilisearch |
| --- | --- |
| Authentication is done using Application ID and API key | Authentication is done using host and API key |
| Secured or Virtual API Keys | Tenant Tokens |
| Records | Documents |
| The primary key (i.e., objectID) should be set by the user, else Algolia will generate it. | Meilisearch can guess the primary key automatically or the user can specify it. |
| An index is a collection of records. | An index is a collection of documents. |
| Index Settings | Index Settings |
| Search Query Rules | Search in an Index  |
| Supported Dataset Format: JSON | Supported Dataset Format: JSON,NDJSON,CSV |
| Virtual Index Replicas for Sorting | In Meilisearch, a single index can handle multiple sort orders using sort search parameter |
| Relevency in Algolia  | Relevancy in Meilisearch  |
| Faceting in Algolia | Faceting in Meilisearch |
| Geosearch in Algolia | Geosearch in Meilisearch |
| UI components are provided via InstantSearch.js | UI components are provided via Instant Meilisearch |

## Indexing Attribute Differences

| Algolia | Meilisearch |
| --- | --- |
| searchableAttributes | searchableAttributes (same) |
| attributesForFaceting | filterableAttributes |
| unretrievableAttributes | Remove them from the displayedAttributes list. |
| attributesToRetrieve |  displayedAttributes |
| attributeForDistinct | distinctAttribute |
| Ranking Rules | Ranking Rules |
| removeStopWords | stopWords |
| Synonyms | Synonyms |
| Sorting(using replicas) | Sorting(no replicas required) |
| removeWordsIfNoResults | Meilisearch automatically supports it, however it isn't customisable. |
| disableTypoToleranceOnAttributes | Coming for v0.27.0.‣ |
| separatorsToIndex | Not Supported |
| disablePrefixOnAttributes | Not Supported |
|  | 
 |

## API Differences (Javascript) -

This section explains the differences between Algolia and Meilisearch in various API methods. We have used JavaScript for reference, but similar differences can be applied to other languages. 

| Topic | Algolia | Meilisearch |
| --- | --- | --- |
| index signature | initIndex() | index() |
| Search Method Signature | index.search(string query, {
     searchParameters
      requestOptions
}) | index.search(string query,object searchParameters) |
| Add object Signature | index.saveObjects(array objects) | index.addDocuments(array objects) |
| Partial Update Object Signature |  | index.updateDocuments(array objects) |
| Delete all objects sign | index.deleteObjects(array objectIDs) | index.deleteAllDocuments() |
| Delete one Object sign | index.deleteObject(string objectID) | index.deleteDocument(string id) |
| Get all objects Sign | index.getObjects(array objectIDs) | index.getDocuments(object params) |
| Get single object sign | index.getObject(str objectID) | index.getDocument(string id) |
|  |  |  |

## Algolia Instantsearch Compatibilties

**[Instant Meilisearch](https://github.com/meilisearch/instant-meilisearch)** is a plugin to establish the communication between your [Meilisearch](https://github.com/meilisearch/meilisearch) instance and the open-source [InstantSearch](https://github.com/algolia/instantsearch.js) tools (powered by Algolia) for your front-end application.

### ✅ Compatible Features

| InstantSearch | Highlight | Snippet | Menu | NumericMenu |
| --- | --- | --- | --- | --- |
| SearchBox | Middleware | Geo Search | currentRefinements | RatingMenu |
| Configure | RenderState | RefinementList | RangeInput | ClearRefinements |
| Voice Search | Hits | HierarchicalMenu | MenuSelect | Pagination |
| Insight | InfiniteHits | RangeSlider | ToggleRefinement | HitsPerPage |
| Breadcrumb | Stats | SortBy | Routing |  |

### ❌ Not Compatible Features

| index | Autocomplete | Answers | QueryRuleCustomData |
| --- | --- | --- | --- |
| QueryRuleContext | RelevantSort | Analytics |  |

Check out I[nstant Meilisearch](https://github.com/meilisearch/instant-meilisearch#readme) for more detailed explanations.
