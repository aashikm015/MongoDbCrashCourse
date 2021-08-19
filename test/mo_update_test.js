const Student = require("../app/student");
const assert = require("assert");

describe("Update test", () => {
  let updater;
  beforeEach((done) => {
    updater = new Student({ name: "Updater" });
    updater.save();
    done();
  });
  it("updating... done", (done) => {
    updater.set("name", "de-Updater");
    updater
      .save()
      .then(() => Student.find({}))
      .then((student) => assert(student[0].name === updater.name));
    done();
  });
});
