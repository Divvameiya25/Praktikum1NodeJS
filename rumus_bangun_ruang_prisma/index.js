// Rumus Bangun Ruang Prisma Segi Empat 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("Cors");
const { response } = require("express");

app.post("/prisma_segiempat", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang * tinggi) + 2 * (panjang * lebar) + 2 * (lebar * tinggi)

    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        volume : volume,
        luas_permukaan : luas_permukaan

    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("server run on port 8000");

})