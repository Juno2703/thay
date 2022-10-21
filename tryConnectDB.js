
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

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(err);
  client.close();
});

console.log("... thay gi chua ?! ");
