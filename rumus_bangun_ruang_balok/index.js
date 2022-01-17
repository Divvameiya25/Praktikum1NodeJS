// Rumus Bangun Ruang Balok
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("Cors");
const { response } = require("express");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
// Rumus Bangun Ruang Balok
app.post("/balok", (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi;
    let luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume, 
        luas_permukaan: luas_permukaan,

    }
    res.json(response)
}
)
app.listen(8000, () => {
    console.log("server run on port 8000");

})
