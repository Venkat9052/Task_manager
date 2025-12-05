
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//database Connected .................
mongoose.connect("mongodb://localhost:27017/Taskmanager").then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("error");
    console.log(err);
})

//Creating schema ...........................

let action = new mongoose.Schema(
    {
        title: String,
        desc:String
    }
)

// Create Model .............................

let Action = new mongoose.model("Actions", action);


app.get("/", (req, res) => {
    res.send("Home Created")
})


//returns all tasks ...................................
app.get("/alltasks",async (req,res)=>{

    try{
        let Tasks = await Action.find()
        let alltasks = Tasks.map(task=>({
                id:task._id,
                title: task.title,
                desc: task.desc 
        }))
        console.log(Tasks);
        console.log(alltasks);
        res.status(200).json({
            message:"your tasks are : ",
            tasks:alltasks
        });
    }
    catch(err){
        console.log(err);
        console.log("oops something went wrong");
        res.status(500).send("oops something went wrong...........")

    }
})




//adds a new task or action to the document
app.post("/add", async (req, res) => {
    let newaction = await Action.create({
        title:req.body.title,
        desc:req.body.desc
    })
    console.log("Data added :"+ newaction);
    res.send({"recieved": req.body});
});

// it updates the existing document

app.put("/update",async(req,res)=>{
    let id = req.body.id
    console.log(id);
    await Action.findByIdAndUpdate(id,{
        title:req.body.title,
        desc:req.body.desc
    });
    res.send(true);
    console.log(req.body.title)
    console.log(req.body.desc)
})

// it deletes the existing document

app.post("/delete",async(req,res)=>{
    await Action.findByIdAndDelete(req.body.id);
    res.send(true);
})



app.listen("9000", () => {
    console.log("server is start at port 9000");
})