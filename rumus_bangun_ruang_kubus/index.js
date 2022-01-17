// Soal 1
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("Cors");
const { response } = require("express");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// Rumus Bangun Ruang Kubus 
app.post("/kubus", (req, res) => {
    let sisi = Number(req.body.sisi)

    let volume = sisi * sisi * sisi;
    let luas_permukaan = 6 * (sisi * sisi)

    let response = {
        sisi: sisi,
        volume: volume, 
        luas_permukaan: luas_permukaan,

    }
    res.json(response)
}
)
app.listen(8000, () => {
    console.log("server run on port 8000");

})