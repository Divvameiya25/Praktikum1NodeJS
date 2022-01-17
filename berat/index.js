//soal no 4
app.post("/bmi", (req,res)=>{
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)

    let bmi = berat / (tinggi * tinggi)
    let status 
    if (bmi<18.5) {
        status="Kekurangan Berat Badan"
    }
    else if (bmi<=24.9 && bmi>=18.5) {
        status="Normal (Ideal)"
    }
    else if (bmi<=29.9 && bmi>=25.0) {
        status="Kelebihan Berat Badan"
    }
    else{
        status="kegemukan (Obesitas)"
    }

    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status
    }
    
    res.json(response)
})

app.listen(8000, () => {
  console.log("Server run on port 8000");
});