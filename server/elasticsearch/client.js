const { Client } = require("@elastic/elasticsearch");
const config = require("../../config/default");

const elasticConfig = config.elastic;

const client = new Client({
  cloud: {
    id: elasticConfig.cloudID,
  },
  auth: {
    apiKey: elasticConfig.apiKey,
  },
});

client
  .ping()
  .then((response) => console.log("You are connected to Elasticsearch!"))
  .catch((error) => console.error("Elasticsearch is not connected."));

module.exports = client;
