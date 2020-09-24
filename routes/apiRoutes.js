const fs = require("fs");
const dbJSON = require("../db/db.json");
var uniqid = require('uniqid');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Request
    // ---------------------------------------------------------------------------
    app.get("/api/notes", function(req, res) {
        res.json(dbJSON);
      });

     // API POST Request
    // ---------------------------------------------------------------------------
    app.post("/api/notes", function(req,res) {
        var newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        };
        fs.readFile("./db/db.json", function(err, data){
            if(err){
                console.log(err)
            }
            let allNotes = JSON.parse(data);
            allNotes.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
                if (err)
                {
                  console.log(err);
                }
                console.log("Note has been saved!");
            });
        });
    });

     // API DELETE Request
    // ---------------------------------------------------------------------------
    app.delete("/api/notes/:id", function(req,res) {
        var toDelID = req.params.id;
        console.log(toDelID);
        fs.readFile("./db/db.json", function(err, data){
            if(err){
                console.log(err)
            }
            let allNotes = JSON.parse(data);

            function deleteId(allNotes) {
                for( let i=0; i < allNotes.length; i++)
                {
                    if(allNotes[i].id === toDelID)
                    {
                        return allNotes.splice(i,1);
                    }
                }
                }
            var notesAfterDeletion = deleteId(allNotes);

            fs.writeFile("./db/db.json", JSON.stringify(notesAfterDeletion), (err) => {
                if (err)
                {
                    console.log(err);
                }
                res.json(notesAfterDeletion);
                console.log("Note has been deleted!");
               });
        });
    
    });
}