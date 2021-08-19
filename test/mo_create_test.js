const Student = require("../app/student");
const assert = require("assert");

describe("Create records", () => {
  it("creating sam... done", (done) => {
    const sam = new Student({ name: "sam", age: 18 });
    sam
      .save()
      .then(() => Student.find({}))
      .then((student) => {
        assert(student[0]._id.toString() === sam._id.toString);
      });
    done();
  });
  it("creating aashik... done", (done) => {
    const aashik = new Student({ name: "aashik", dob: "21-03-2001" });
    aashik
      .save()
      .then(() => Student.find({ name: "aashik" }))
      .then((student) => {
        assert(student._id.toString() === aashik._id.toString);
      });
    done();
  });
});
