const express = require("express");
const bodyParser = require("body-parser");
const cors = require("Cors");
const { response } = require("express");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//Rumus Bangun Ruang Tabung 
app.post("/tabung", (req, res) => {
    let jari_jari = Number(req.body.jari_jari);
    let tinggi = Number(req.body.tinggi);
    let phi = Number(req.body.phi);

    let volume = phi * jari_jari * tinggi; 
    let luas_permukaan = 2 * phi * jari_jari * (jari_jari + tinggi);


    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        phi: phi,
        volume: volume, 
        luas_permukaan: luas_permukaan,

    }
    res.json(response)
}
)
app.listen(8000, () => {
    console.log("server run on port 8000");

})