/**
 * MongoDB Connection
 */

// Dependencies

const { MongoClient } = require("mongodb"),
    dbName = "todoApp";

MongoClient.connect(
    "mongodb://localhost:27017/",
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            return console.log("Unable to connect to mongodb server");
        }

        const db = client.db(dbName),
            todos = db.collection("todos"),
            users = db.collection("users");

        todos.insertOne({
            task: "study NodeJS",
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log("Unable to insert todo task:", err);
            }
            return console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), null, 2));
        });

        users.insertOne({
            name: "Saiyuri",
            age: 33,
            location: "Sapporo"
        }, (err, result) => {
            if (err) {
                return console.log("Unable to insert user:", err);
            }
            return console.log(result.ops);
        });

        return client.close();
    }
);


