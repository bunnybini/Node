// Import the express library and assign it to a variable
import express from "express";
// import * as emoji from "node-emoji";
// import IconH1 from "@codexteam/icons";
// import PasswordGenerator from 'password-generator';
// var randomColor = require("randomcolor"); // import the script
import randomColor from "randomcolor";

var color = randomColor(); // a hex code for an attractive color

// Add this line to the top of the file
// import { sentence } from "txtgen";

// import emoji from "emoji-love-letter";
// Returns a hex code for an attractive color
randomColor();

// Returns an array of ten green colors
randomColor({
  count: 10,
  hue: "green",
});

// Returns a hex code for a light blue
randomColor({
  luminosity: "light",
  hue: "blue",
});

// Returns a hex code for a 'truly random' color
randomColor({
  luminosity: "random",
  hue: "random",
});

// Returns a bright color in RGB
randomColor({
  luminosity: "bright",
  format: "rgb", // e.g. 'rgb(225,200,20)'
});

// Returns a dark RGB color with random alpha
randomColor({
  luminosity: "dark",
  format: "rgba", // e.g. 'rgba(9, 1, 107, 0.6482447960879654)'
});

// Returns a dark RGB color with specified alpha
randomColor({
  luminosity: "dark",
  format: "rgba",
  alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
});

// Returns a light HSL color with random alpha
randomColor({
  luminosity: "light",
  format: "hsla", // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
});
// Update the express app code below to this:
// app.get('/', (req, res) => {
//   const randomSentence = sentence()

//   res.send(randomSentence)
// })
// emoji.emojify("I :heart: :coffee:!"); // 'I ❤️ ☕️!'

// emoji.find("heart"); // { emoji: '❤', name: 'heart' }
// emoji.find("❤️"); // { emoji: '❤', name: 'heart' }

// emoji.get("unicorn"); // 🦄
// emoji.get(":unicorn:"); // 🦄

// emoji.has(":pizza:"); // true
// emoji.has("🍕"); // true
// emoji.has("unknown"); // false

// emoji.random(); // { name: 'house', emoji: '🏠' }

// emoji.replace("I ❤️ coffee!", "love", { preserveSpaces: true }); // 'I love coffee!'

// emoji.search(":uni:"); // [ { emoji: '🦄', name: 'unicorn' }, ... ]

// emoji.strip("I ❤️ coffee!"); // 'I coffee!'

// emoji.unemojify("🍕 for 💃"); // ':pizza: for :dancer:'

// emoji.which("🦄"); // 'unicorn'

// Create an instance of an express application
const app = express();

// Set the port the application will be running on
const port = process.env.PORT || 3001;

// Set up a response for the root path of the application
// app.get("/", (req, res) => {
//   // res.send(emoji());
//   const emojifiedString = emoji.emojify("Hello, :smile:");
//
// });

app.get("/", (req, res) => {
  // const randomEmoji = emoji.random();
  // const emojifiedString = `${randomEmoji.name}: ${randomEmoji.emoji}`;
  // res.send(emojifiedString);
  res.send(randomColor());
});

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
