const db = require('../models');
// refer to api.js for data requests
module.exports = (app) => {
    // app.get for all workouts, populate last workout> api.js getLastWorkout
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // app.put for updating workout with new exercise > api.js addExercise
    app.put('/api/workouts/:id', ({ body, params }, res) => {
        db.Workout.findOneAndUpdate(
            {_id: params.id},
            { 
                $push: {exercises: body},
                $inc: {totalDuration: body.duration},
            },
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // app.post for creating new workout with new exercise > api.js createWorkout
    app.post('/api/workouts', (req, res) => {
        db.Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // app.get for stats of last 7 workouts > api.js getWorkoutsInRange
    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .sort({ day: -1 })
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    })
}


