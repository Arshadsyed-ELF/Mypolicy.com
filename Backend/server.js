const express = require('express')
require('./db/config')
const user=require('./db/user')
const Life = require('./db/life')
const Health = require('./db/health')
const Bike = require('./db/bike')
const userbike=require('./db/userbike')
const Car = require('./db/car')
const cors = require('cors')
const userlife = require('./db/userlife')
const usercar = require('./db/usercar')
const userhealth = require('./db/userhealth')

const app = express();
app.use(express.json())
app.use(cors(
  {
      origin: ["http://localhost:3000"],
      methods: ["POST", "GET", "DELETE", "PUT"],
      credentials: true
  }
))

//  login api
app.post('/login', (req, resp) => {  
  const { email, password } = req.body;   
  user.findOne({ email: email })
      .then(user => {
          if (user) {
              if (user.password === password) {
                  return resp.json({ Status: "Success", user: { id:user.id,name: user.name, email: user.email } })

                  // Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
                  //     if(err){
                  //         resp.send({result:" something went wrong"})
                  //     }
                  //     resp.send({user, auth:token})
                  // })
              } else {
                  resp.json("login fail")
              }
          } else {
              resp.json("no user")
          }
      })
})

// Register Api
app.post('/register', (req, resp) => {
  const { name, email, password } = req.body;
  user.findOne({ email: email })
      .then(use => {
          if (use) {
              resp.json("Already have an account")
          } else {
              user.create({ email: email, name: name, password: password })
                  .then(result => resp.json("  Account Created"))
                  .catch(err => resp.json(err))
          }
      }).catch(err => resp.json("failed "))
})
 //users //
app.get('/getusers', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await user.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/getuser/:id', async (req, res) => {
  const id = req.params.id;
  try {
      const event = await user.findById({_id: id });
      res.json(event);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});
app.put('/useredit/:id', (req, res) => {
  const id = req.params.id;
  user.findByIdAndUpdate({ _id: id }, {
      name: req.body.name,
     email: req.body.email,
      
  })
      .then(users => res.json(users))
      .catch(err => res.json(err))
})

app.delete('/userdelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await user.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// life //
app.post('/life', async (req, res) => {
  const { provider,  claim, perks, price, details, coveragetill,onsurvival,ondeath } = req.body;

  try {
    const bike = new Life({ provider,  claim, perks, price, details,coveragetill,onsurvival,ondeath });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});

app.get('/getlife', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await Life.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/lifedelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Life.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// user life//

app.get('/lifeinsurance/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await userlife.find({userId}).sort('position');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.get('/getuserlife', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await userlife.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/getuserlife/:userId', (req, res) => {
  const userId = req.params.userId;

  // Use userId to filter records in your database query
  userlife.find({ userId: userId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
app.post('/userlife', async (req, res) => {
  const { name, email, phoneNo, aadhar,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String, } = req.body;

  try {
    const bike = new userlife({name, email, phoneNo, aadhar,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String,  });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});
app.delete('/userlifedelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userlife.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// health //


app.post('/health', async (req, res) => {
  const { provider,  perks, price, details,hospitals,cover,validity, } = req.body;

  try {
    const bike = new Health({ provider, perks, price, details,hospitals,cover,validity, });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});

app.get('/gethealth', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await Health.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/healthdelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Health.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
// user Health//

app.get('/healthinsurance/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await userhealth.find({userId}).sort('position');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }  
});

app.get('/getuserhealth', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await userhealth.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/getuserhealth/:userId', (req, res) => {
  const userId = req.params.userId;

  // Use userId to filter records in your database query
  userhealth.find({ userId: userId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
app.post('/userhealth', async (req, res) => {
  const { name, email, phoneNo, aadhar,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String, } = req.body;

  try {
    const bike = new userhealth({name, email, phoneNo, aadhar,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String,  });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});
app.delete('/userhealthdelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userhealth.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


//car //
app.post('/car', async (req, res) => {
  const { provider, idv, perks, price, details,claim } = req.body;

  try {
    const bike = new Car({ provider, idv, perks, price, details,claim });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});

app.get('/getcar', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await Car.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/cardelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Car.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// user Car//

app.get('/carinsurance/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await usercar.find({userId}).sort('position');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
}); 
app.get('/getusercar', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await usercar.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/getusercar/:userId', (req, res) => {
  const userId = req.params.userId;

  // Use userId to filter records in your database query
  usercar.find({ userId: userId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/usercar', async (req, res) => {
  const { name, email, phoneNo, carNo,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String, } = req.body;

  try {
    const bike = new usercar({name, email, phoneNo, carNo,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String,  });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});
app.delete('/usercardelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await usercar.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

//bike//
app.post('/bike', async (req, res) => {
  const { provider, idv, perks, claim, price, details } = req.body;

  try {
    const bike = new Bike({ provider, idv, claim, perks, price, details });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});

app.get('/getbike', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await Bike.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/getbike/:userId', (req, res) => {
  const id = req.params.id;

  // Use userId to filter records in your database query
  Bike.find({ id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



app.delete('/bikedelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Bike.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// user Bike //

app.get('/bikeinsurance/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await userbike.find({userId}).sort('position');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.post('/userbike', async (req, res) => {
  const { name, email, phoneNo, bikeNo,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String, } = req.body;

  try {
    const bike = new userbike({name, email, phoneNo, bikeNo,totalamount,provider,registrationDate,validtill,details,perks,userId,userName:String,  });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create policy' });
  }
});

app.get('/getuserbike', async (req, res) => {
  try {
    // Fetch all car insurance records from the database
    const bike = await userbike.find();
    res.status(200).json(bike);
  } catch (error) {
    console.error('Error fetching car insurance data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Modify your route to accept a user ID parameter
app.get('/getuserbike/:userId', (req, res) => {
  const userId = req.params.userId;

  // Use userId to filter records in your database query
  userbike.find({ userId: userId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


app.delete('/bikedelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Bike.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/userbikedelete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userbike.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(8080, () => {
  console.log("listening at 8080")
})