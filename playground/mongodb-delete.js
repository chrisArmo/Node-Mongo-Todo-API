/**
 * MongoDB Delete Challenge
 */

// Dependencies

const { MongoClient, ObjectId } = require("mongodb");

// Setup

const connection = {
    url: "mongodb://localhost:27017",
    name: "taskManager"
};

// Connection

MongoClient.connect(
    connection.url,
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            console.log(`MongoDB Error: ${err}`)
        } else {
            const db = client.db(connection.name),
                users = db.collection("users");

            users
                .findOneAndDelete({
                    _id: ObjectId("5c256eaefe44cb43a77456cb")
                })
                .then(({ value }) => {
                    console.log(value);
                    client.close();
                })
                .catch((err) => {
                    console.log(err);
                    client.close();
                });
        }
    }
);
