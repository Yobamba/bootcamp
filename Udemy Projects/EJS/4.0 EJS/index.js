import express from "express";

const app = express();

const port = 3000;


const d = new Date();
let day = d.getDay();

let dayOfWeek;
let adviceString;
let dateType;

if (day == 6 || day == 0) {
    dayOfWeek = 1;
    dateType = "a weekend";
    adviceString = "Enjoy yourself";
    } else {
        dayOfWeek = 0;
        dateType = "a weekday";
        adviceString = "Buckle up and face this week!";
    }

// if (dayOfWeek == 1) {
//     advice = "Enjoy your weekend!"
// } else {
//     advice = "Buckle up and face the week!"
// }


app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: dateType, advice: adviceString});
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})




