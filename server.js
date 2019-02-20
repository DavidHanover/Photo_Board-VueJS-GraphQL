const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

//import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

//import environment variables and mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

//connect to mlab database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"))
  .catch(err => console.error(err));

//create apollo/graphql server using typedefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

//listening on default port 4000
server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
