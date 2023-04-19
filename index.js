let express=require('express');
let app=express();
let path=require('path');
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded())

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"index.html"));
})


app.get("/accessories",(req,res) =>{
    res.sendFile(path.join(__dirname,"exterior.html"));
})

app.get("/interior",(req,res) =>{
    res.sendFile(path.join(__dirname,"interior.html"));
})
app.get("/exterior",(req,res) =>{
    res.sendFile(path.join(__dirname,"exterior.html"));
})
app.get("/electronics",(req,res) =>{
    res.sendFile(path.join(__dirname,"electronics.html"));
})


// app.get("/exterior",(req,res) =>{
//     let a = document.getElementById('test').innerText;
//     res.console.log(a);
// })





//-------------------------------------

app.get("/buynow1",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage1.html"));
})


app.post("/buynow1",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="1.Wheel Rim";

    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));

})

app.get("/buynow2",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage2.html"));
})
app.post("/buynow2",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="2.Wheel Rim";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})

app.get("/buynow3",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage3.html"));
})
app.post("/buynow3",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="3.Wiper";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})

app.get("/buynow4",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage4.html"));
})
app.post("/buynow4",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="4.Wiper";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})

app.get("/buynow5",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage5.html"));
})
app.post("/buynow5",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="5.Car Cover";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow6",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage6.html"));
})
app.post("/buynow6",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="6.BlackLeatherSteeringCover";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})




app.get("/buynow7",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage7.html"));
})
app.post("/buynow7",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="7.BeigeSteeringCover";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow8",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage8.html"));
})
app.post("/buynow8",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="8.SeatCoverWithBlueOutline";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow9",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage9.html"));
})
app.post("/buynow9",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="9.Velvet Leather SWC";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})


app.get("/buynow10",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage10.html"));
})
app.post("/buynow10",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="10.BeigeLeatherCarSeatCover";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow11",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage11.html"));
})
app.post("/buynow11",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="11.LeathSeatCoverWithBrownOut";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow12",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage12.html"));
})
app.post("/buynow12",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="12.Shift Knob Cover";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow13",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage13.html"));
})
app.post("/buynow13",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="13.Black Gear Knob";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow14",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage14.html"));
})
app.post("/buynow14",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="14.BlackLeatheriteGearKnob";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow15",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage15.html"));
})
app.post("/buynow15",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="15.Smart Audio System";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})




app.get("/buynow16",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage16.html"));
})
app.post("/buynow16",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="16.Audio System";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow17",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage17.html"));
})
app.post("/buynow17",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="17.ParkingSensorandCamera";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow18",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage18.html"));
})
app.post("/buynow18",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="18.Wireless Car Charger";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})



app.get("/buynow19",(req,res) =>{
    res.sendFile(path.join(__dirname,"buypage19.html"));
})
app.post("/buynow19",(req,res) =>{
    let name=req.body.myname;
    let email=req.body.myemail;
    let number =req.body.mynumber;
    let house =req.body.myflt;
    let state =req.body.state;
    let address =req.body.address;
    let pin =req.body.pin;
    let product="19.Car Speakers";
    
    con.query("insert into customer(name,email,contact,housenumber,state,address,pin,product) values (?,?,?,?,?,?,?,?);",[name,email,number,house,state,address,pin,product],(error,result) =>{
    });

    res.sendFile(path.join(__dirname,"orderplaced.html"));
})




















//-------------------------------------




app.get("/contact",(req,res) =>{
    res.sendFile(path.join(__dirname,"contact.html"));
})
app.post("/contact",(req,res) =>{
    let name=req.body.name;
    let email=req.body.email;
    let message =req.body.message;
    res.sendFile(path.join(__dirname,"contact.html"));
    con.query("insert into contact(name,email,message) values (?,?,?)",[name,email,message],(error,result) =>{
        
    });
    
})


app.get("/about",(req,res) =>{
    res.sendFile(path.join(__dirname,"about.html"));
})


app.listen(80,(err) =>{
    if(err) throw err;
    else
    console.log("We are Live");
})


//connecting to database
let mysql=require('mysql');

let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"05062003",
    database:"collegeproject"
})

con.connect((err) =>{

    if(err) throw err;
    else
    console.log("Connected to Database\n");
})

   