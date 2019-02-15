const User = require("../../src/db/models/user");
const mongoose = require("mongoose");
const database = "mongodb://localhost:27017/summit-test";

mongoose.connect(database);

describe("User", () => {
  beforeEach(done => {
    mongoose.connect(
      database,
      () => {
        mongoose.connection.db.dropDatabase(() => {
          done();
        });
      }
    );
  });

  describe("#create", () => {
    it("should create a new User object with a valid email and password", done => {
      const newUser = new User({
        email: "test@summit.com",
        password: "1234567"
      });

      newUser
        .save()
        .then(user => {
          expect(user.email).toBe("test@summit.com");
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
    it('should not create a new User object with invalid email or password', done => {
        const newUser = new User({
            email:'test',
            password: '1234567'
        });

        newUser.save().then(() => {
            
            done();
        })
        .catch((err) => {
            expect(err).not.toBeNull();
            done();
        })
    });
  });

  describe("#addAltitude", () => {
    beforeEach(done => {
      this.user;

      const theUser = new User({
        email: "altitudetest@summit.com",
        password: "1234567"
      });

      theUser
        .save()
        .then(user => {
          this.user = user;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
    it("should add altitude and unit to the User document", done => {
      const newAltitude = {
        altitude: {
          altitude: 1234,
          unit: "imperial"
        }
      };

      User.findByIdAndUpdate(this.user._id, newAltitude, { new: true })
        .then(user => {
          expect(user.altitude.altitude).toBe(1234);
          expect(user.altitude.unit).toBe("imperial");
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
