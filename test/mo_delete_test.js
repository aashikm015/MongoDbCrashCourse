const Student = require("../app/student");
const assert = require("assert");

describe("Delete Test:", () => {
  let deleter;
  beforeEach((done) => {
    deleter = Student({ name: "Deleter" });
    deleter.save().then(() => {
      done();
    });
  });
  it("deleting... done", (done) => {
    Student.findByIdAndDelete(deleter._id)
      .then(() => Student.findById(deleter._id))
      .then((student) => {
        assert(student === null);
        done();
      });
  });
});
