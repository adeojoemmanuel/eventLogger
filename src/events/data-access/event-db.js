const AWS = require("aws-sdk");
const redis = require('redis');


AWS.config.update({
  region: "us-east-2",
});

const redisClient = redis.createClient(6379);
const awsClient = new AWS.DynamoDB.DocumentClient();
const event_table = "event_t";

export default function makeEventDb ({ makeDb, EventModel }) {
  return Object.freeze({
    findAll,
    create,
  })

  async function create (eventData) {
    await makeDb();
    var params = {
      TableName: event_table,
      Item: {
        event_id: req.body.event_id,
        action_creator: req.body.action_creator,
        receiver: req.body.receiver,
        event_type: req.body.event_type,
        time: req.body.time,
        url_from: req.body.url_from,
        agent: req.body.agent
      }
    };
    
   await redisClient.get(data, async (err, redis_response) => {
      if (redis_response) {
        return data;
      } else {
        awsClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                client.setex(data, 1440, JSON.stringify(data));
                return data
            }
        });
      }
    })
  }

  async function findAll() {
    await makeDb();
    let filter =  {
      action_creator: req.params.action_creator,
      receiver: req.params.receiver,
      event_type: req.params.event_type,
      url_from: req.params.url_from
    }
    var params = {
      TableName: event_table,
      Key: filter
    };
    awsClient.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            return data
        }
    }
  }
}