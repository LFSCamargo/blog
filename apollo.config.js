/** 
 * @type {import('apollo').ApolloConfig} 
 * @description - This will provide autocomplete for queries 
 */
module.exports = {
  client: {
    service: {
      name: 'blog',
      localSchemaFile: './graphql/schema.json',
      url: 'https://graphql.contentful.com/content/v1/spaces/bniasprfxkbv',
      headers: {
        authorization: `Bearer d6raGW3ZfoqiGceLeu2062uz96vOxuhiTenILoSZA2w`
      },
      skipSSLValidation: true
    }
  }
};