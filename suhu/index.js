//soal no 2
app.get("/convert/celcius/:value", (req, res) => {
    let celcius = req.params.celcius;
    let value = req.params.value;
  
    let reamur = (4 / 5) * value;
    let fahrenheit = (9 / 5) * value + 32;
    let kelvin = (1 / 1) * value + 273;
  
    let response = {
      celcius: value,
      result: {
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin,
      },
    };
    res.json(response);
  });
  
  app.get("/convert/reamur/:value", (req, res) => {
    let reamur = req.params.reamur;
    let value = req.params.value;
  
    let celcius = (5 / 4) * value;
    let fahrenheit = (9 / 4) * value + 32;
    let kelvin = (5 / 4) * value + 273;
  
    let response = {
      reamur: value,
      result: {
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin,
      },
    };
    res.json(response);
  });
  
  app.get("/convert/kelvin/:value", (req, res) => {
    let kelvin = req.params.kelvin;
    let value = req.params.value;
  
    let celcius = value - 273;
    let fahrenheit = (9 / 5) * (value - 273.15) + 32;
    let reamur = (4 / 5) * (value - 273.15);
  
    let response = {
      kelvin: value,
      result: {
        celcius: celcius,
        fahrenheit: fahrenheit,
        reamur: reamur,
      },
    };
    res.json(response);
  });
  
  app.get("/convert/fahrenheit/:value", (req, res) => {
    let fahrenheit = req.params.fahrenheit;
    let value = req.params.value;
  
    let celcius = (5 / 9) * (value - 32);
    let reamur = (4 / 9) * (value - 32);
    let kelvin = (5 / 9) * (value - 32) + 273;
  
    let response = {
      fahrenheit: value,
      result: {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin,
      },
    };
    res.json(response);
  });