import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/notesDB", {useNewUrlParser: true});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const notesSchema = {
 title: {type: String},
 content: {type: String}
}

const Note = mongoose.model("note", notesSchema);

app.route("/notes")

    .get(function(req, res){
      (async () =>{
        const art = await Note.find({});
        res.json(art)
      })();
    })

    .post( function(req,res) {
      (async ()=>{
      const newNote = new Note (req.body);
      newNote.save();
      })();
    })

    .delete(function(req,res){
      (async () =>{
        await Note.findOneAndDelete(
        {
            title: req.body.title,
            content: req.body.content
        } 
        )
    })();
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

