const mongoose = require("mongoose");
const Student = require("../app/student");
const assert = require("assert");
mongoose.Promise = global.Promise; //says use Es6 promises

before((done) => {
  mongoose.connect("mongodb://localhost/mongotube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once("open", () => done())
    .on("error", (error) => {
      console.log("Error: " + error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.students.drop(() => {
    done();
  });
});
