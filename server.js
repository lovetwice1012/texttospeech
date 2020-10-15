// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
app.get("/", (request, response) => {
 // response.sendFile(__dirname + "/views/index.html");
response.send("speech-to-txt")
});
app.get("/download", (req, res) => {


var Speaker = require('speaker');
var OpenJTalk = require('node-openjtalk').OpenJTalk;

// pre-included HTS voice file
var fn_voice = OpenJTalk.voices.mei_normal;
// instantiate OpenJTalk with an HTS voice
var open_jtalk = new OpenJTalk({voice: fn_voice});

// synthesize a voice buffer from a text
open_jtalk.synthesize(req.query.text, function(error, buffer) {
  if (!error) {
    // save as audio file
    buffer.pipe(res)
  }
});
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
