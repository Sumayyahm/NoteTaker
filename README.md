# NoteTaker

## Description
An application that can write, save and delete notes for the user

## URL of the Deployed app in Heroku
https://quiet-eyrie-59914.herokuapp.com/

## Code
The frontend for this app was provide and we were required to create the backend and connect the two
1. Created a server.js file that sets up the express app to handle data parsing and a listener that starts the server
2. Provided route files for the server - htmlRoutes.js and apiRoutes.js
3. The htmlRoutes.js contains the HTML get requests and the user is showm the HTML page content
4. The apiRoutes.js contains the API get request that reads the dbjson file and returns the data, post request that receives a new note and saves it to the db.json file and returns the new note to the client and the  delete request that deletes the selected note based on the unique id(using npm uniqid) of each note.

## License
None

## Author
SumayyahM

## Screenshots
![image](https://user-images.githubusercontent.com/66535567/94217937-dd5c5c80-fea8-11ea-9f54-bd7aff3da967.png)

![image](https://user-images.githubusercontent.com/66535567/94218006-0aa90a80-fea9-11ea-90b3-30d62969aebb.png)

## Short videos
![notetaker](https://j.gifs.com/Gv0yrK.gif)

![notetaker2](https://j.gifs.com/WLVk0E.gif)

![notetaker3](https://j.gifs.com/91WRNJ.gif)



