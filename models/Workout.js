const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
// day of workout
    day: {
        type: Date,
        default: Date.now,
    },
// exercise body
    exercises: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trime: true,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
}, {
    toJSON: {virtuals: true}
});

WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, { duration }) => {
        return total + duration
    }, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;