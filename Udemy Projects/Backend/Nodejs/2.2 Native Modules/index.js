const fs = require("fs");

// fs.writeFile("newMessage.txt", "What up party people!!", (err) => {
//     if (err) throw err;
//     console.log("the message has been saved!");


// });

fs.readFile('./newMessage.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });