const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
//   day of workout
    day: {
        type: Date,
    },
// all compiled exercises from Exercise schema by id
    exercises: {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;