/**
 * MongoDB Connect 2
 */

// Dependencies

const { MongoClient } = require("mongodb");

const connection = {
    url: "mongodb://localhost:27017",
    name: "taskManager"
};

MongoClient.connect(
    connection.url,
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            console.log(`Unable to connect to MongoDB: ${err}`);
        } else {
            const db = client.db(connection.name),
                todos = db.collection("todos");

            todos
                .findOneAndDelete({ completed: true })
                .then(({ value }) => {
                    console.log(value);
                    client.close();
                })
                .catch((err) => {
                    console.log(err);
                    client.close();
                });
        }
    });
