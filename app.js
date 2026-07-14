const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://Merin:merin1234@ac-57kints-shard-00-00.1jikayo.mongodb.net:27017,ac-57kints-shard-00-01.1jikayo.mongodb.net:27017,ac-57kints-shard-00-02.1jikayo.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-q39jjp-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("mongodb connected")
})
.catch((error) => {
    console.log(error)
})

const hackathon = mongoose.model("Hackathons", new mongoose.Schema({
    teamId: String,
    teamName: String,
    teamLeaderName: String,
    leaderEmail: String,
    leaderPhone: String,
    collegeName: String,
    numberOfMembers: String,
    projectTitle: String,
    problemStatementTrack: String,
    technologyStack: String,
    mentorName: String,
    registrationDate: String,
    tableStationNumber: String
}))

app.get("/test", (req, res) => {
    res.send("Hello")
})

app.post("/view-hackathon", async (req, res) => {
    const Hackathons = await hackathon.find()
    res.json(Hackathons)
})

app.post("/add-hackathon", (req, res) => {
    hackathon.create(req.body)
    res.json({
        "status": "success"
    })
})

app.listen(3000, () => {
    console.log("Server started")
})