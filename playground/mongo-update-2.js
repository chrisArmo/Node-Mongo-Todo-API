/**
 * Mongo Update Challenge
 */

// Dependencies

const { MongoClient, ObjectId } = require("mongodb");

// Configuration

const config = {
    url: "mongodb://localhost:27017",
    dbName: "taskManager"
};

// Connection

MongoClient.connect(config.url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(err);
    }
    const taskManager = client.db(config.dbName),
        users = taskManager.collection("users");
    users
        .findOneAndUpdate(
            {
                _id: ObjectId("5c256eaefe44cb43a77456ca")
            }, {
                $inc: {
                    age: 4
                }
            }, {
                returnOriginal: false
            }
        )
        .then((result) => {
            const { value } = result;
            console.log(value);
            client.close();
        })
        .catch((err) => {
            console.log(err);
            client.close();
        });
});
