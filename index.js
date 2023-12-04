
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const picture = "";



app.use(express.static("public"));

app.get("/", async (req,res) => {
  try {  
    const respond = await axios.get ("https://api.kanye.rest/");
    const result  = respond.data;
    const randomNumber = Math.floor(Math.random()* 10) + 1;
    const picture = `/images/kanyepic${randomNumber}.jpg`
    console.log(picture);
    res.render ("index.ejs", {quote: result.quote, img: picture})
}
 catch(error) {
    console.error(error)
    res.render ("index.ejs", {error: error.response})
 }

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });