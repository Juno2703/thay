
const { MongoClient, ServerApiVersion } = require('mongodb');

const accUN = "user202210";
const accPW = "d3Z2x7JQEzUcdeDJ";
const uri = "mongodb+srv://"
+ accUN + ":" + accPW + 
"@cluster0.s7ukh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    });

client.connect( (err, db) => {
  
    if (err) {
        console.log("Error: ", err);
        process.exit(0);
    }
  
    db.db("Shop_2022_10").createCollection("customers",
        (err2, results) => {
            if (err2) {
                console.log("Error: ", err2);
            } else {
                console.log("Created !!!");
                db.close();
            }
            process.exit(1);
        }
    );
  

});


