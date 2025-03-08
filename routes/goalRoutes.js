// step 10
const express = require("express"); // import express to create a router for handling  goal- related routes
const { newGoal, allGoals, completedGoals, ongoingGoals, getGoal, editProgress, deletedGoal } = require("../controller/goalController");



const router = express.Router() // get router from express and keep it in a container called router

// create a new goal router
router.post("/new", newGoal);

// Retrieve all goals
router.get("/", allGoals )

// retrieve all completed goals (progress === 100)
router.get("/completed", completedGoals)

// retrieve all ongoing goals (progress < 100)
router.get("/ongoing", ongoingGoals)

// retrieve a single goal by its ID
router.get("/:id", getGoal)

// Update only the progress of a goal using patchh
router.patch("/:id/progress", editProgress)

// Delete a goal by its ID 
router.delete("/:id", deletedGoal)

// export the router to be used in 
module.exports = router