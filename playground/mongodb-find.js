/**
 * MongoDB Find
 */

// Dependencies

const { MongoClient, ObjectId } = require("mongodb");

const dbName = "todoApp";

MongoClient.connect(
    "mongodb://localhost:27017",
    {useNewUrlParser: true},
    (err, client) => {
        if (!err) {
            const db = client.db(dbName);
            db.collection("todos")
                .find({
                    completed: false
                })
                .count()
                .then((count) => {
                    console.log(`Incomplete Task Count: ${count}`);
                    client.close();
                });
        } else {
            console.log(`Connection Error: ${err}`);
        }
    }
)
