const express = require("express");
const config = require("config");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(express.json({ extended: true }));

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = config.get("port") || 3005;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DB connected"))
    .catch(e => console.log(e.message));

    app.listen(PORT, () => console.log(`App started on port ${PORT}...`));

  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();