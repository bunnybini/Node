// Import the express library and assign it to a variable
import express from "express";
import * as emoji from "node-emoji";
// Add this line to the top of the file
// import { sentence } from "txtgen";

// import emoji from "emoji-love-letter";

// Update the express app code below to this:
// app.get('/', (req, res) => {
//   const randomSentence = sentence()

//   res.send(randomSentence)
// })
emoji.emojify("I :heart: :coffee:!"); // 'I ❤️ ☕️!'

emoji.find("heart"); // { emoji: '❤', name: 'heart' }
emoji.find("❤️"); // { emoji: '❤', name: 'heart' }

emoji.get("unicorn"); // 🦄
emoji.get(":unicorn:"); // 🦄

emoji.has(":pizza:"); // true
emoji.has("🍕"); // true
emoji.has("unknown"); // false

emoji.random(); // { name: 'house', emoji: '🏠' }

emoji.replace("I ❤️ coffee!", "love", { preserveSpaces: true }); // 'I love coffee!'

emoji.search(":uni:"); // [ { emoji: '🦄', name: 'unicorn' }, ... ]

emoji.strip("I ❤️ coffee!"); // 'I coffee!'

emoji.unemojify("🍕 for 💃"); // ':pizza: for :dancer:'

emoji.which("🦄"); // 'unicorn'

// Create an instance of an express application
const app = express();

// Set the port the application will be running on
const port = process.env.PORT || 3001;

// Set up a response for the root path of the application
// app.get("/", (req, res) => {
//   // res.send(emoji());
//   const emojifiedString = emoji.emojify("Hello, :smile:");
//   res.send(emojifiedString);
// });

app.get("/", (req, res) => {
  const randomEmoji = emoji.random();
  const emojifiedString = `${randomEmoji.name}: ${randomEmoji.emoji}`;
  res.send(emojifiedString);
});

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
