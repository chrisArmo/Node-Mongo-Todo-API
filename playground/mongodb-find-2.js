/**
 * Find 2
 */

// Dependencies

const { MongoClient, ObjectId } = require("mongodb");

const dbName = "todoApp";

MongoClient.connect(
    "mongodb://localhost:27017",
    { useNewUrlParser: true },
    (err, client) => {
        if (!err) {
            const db = client.db(dbName);
            db.collection("users")
                .find({
                    $and: [
                        { name: { $not: /^pistachio/i } },
                        { name: { $not: /^jax/i } }
                    ]
                })
                .toArray()
                .then((users) => {
                    console.log(JSON.stringify(users, null, 2));
                    client.close();
                })
                .catch((err) => {
                    console.log(err);
                    client.close();
                });
        } else {
            console.log(`MongoDB Connection Error: ${err}`);
        }
    }
);
