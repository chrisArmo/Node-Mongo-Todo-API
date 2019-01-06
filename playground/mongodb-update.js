/**
 * Mongodb Update
 */

// Dependencies

const { MongoClient, ObjectId } = require("mongodb");

// Configuration

const config = {
    url: "mongodb://localhost:27017",
    dbName: "taskManager"
};

// Connection

MongoClient.connect(config.url, {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    const taskManager = client.db(config.dbName),
        todos = taskManager.collection("todos");
    todos
        .findOneAndUpdate(
            {
                _id: ObjectId("5c256dd4fe44cb43a77456c6")
            }, {
                $set: {
                    completed: true,
                }
            }, {
                returnOriginal: false
            }
        )
        .then((result) => {
            console.log(result);
            client.close();
        })
        .catch((err) => {
            console.log(err);
            client.close();
        });
});
