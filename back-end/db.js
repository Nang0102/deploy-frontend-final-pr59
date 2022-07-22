const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://final_project_3:1234567890@cluster0.gi7pf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "Hotel_Booking";
const db = {};

async function connectToDb() {
  await client.connect();
  console.log("Connected successfully to Database");
  const database = client.db(dbName);

  db.users = database.collection("Users");

  return "done.";
}

module.exports = { connectToDb, db };


// try {
//   let userData = {};
//   let user = await db.users.findOne({ email });
//   if (user) {
//     let check = await bcrypt.compareSync(password, user.password);
//     if (check && username === user.username) {
//       userData.errCode = 0;
//       userData.message = "OK";
//       userData.user = user;
//     } else {
//       userData.errCode = 1;
//       userData.message = "Wrong password or username!";
//     }
//   } else {
//     userData.errCode = 1;
//     userData.message = "User is not found!";
//   }

//   return userData;
// } catch (error) {
//   console.log(error.message);
// }