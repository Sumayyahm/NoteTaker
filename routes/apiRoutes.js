const fs = require("fs");
const dbJSON = require("../db/db.json");
var uniqid = require('uniqid');

var allNotes = dbJSON;
console.log(dbJSON);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Request
    // ---------------------------------------------------------------------------
    app.get("/api/notes", function(req, res) {
        console.log(dbJSON);
        return res.send(allNotes);
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
            allNotes.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
                if (err)
                {
                  console.log(err);
                }
                console.log("Note has been saved!");
            });
            res.send(allNotes);
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
                     
            allNotes = allNotes.filter(allNotes => allNotes.id != toDelID);

            fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
                if (err)
                {
                    console.log(err);
                }
                console.log("Note has been deleted!");
               });
              res.send(allNotes);
        });
    });
}