const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "", 
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO `login`(`name`, `email`, `password`) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.password + "')";
    db.query(sql,(err,data) => {
        if(err){
            return res.json("Error");
        }
        
        console.log(req.body); 
        return res.json(data);
    })
})


app.post('/login', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);

    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        console.log(data);
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});

// app.get('/flows', (req, res) => {
//     const sql = 'SELECT * FROM flow';
  
//     db.query(sql, (err, results) => {
//       if (err) {
//         console.error('Error fetching flow data:', err);
//         res.status(500).json({ error: 'Error fetching flow data' });
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   });

function fetchFlowData() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM flow';
      db.query(sql, (err, results) => {
        if (err) {
          console.error('Error fetching flow data:', err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  const fetchDataInterval = 600000; // 10 minutes in milliseconds
  let flowData = [];
  
  // Initial fetch on server start
  fetchFlowData()
    .then((data) => {
      flowData = data;
    })
    .catch((err) => {
      console.error('Initial data fetch error:', err);
    });
  
  // Periodically fetch data and update flowData
  setInterval(() => {
    fetchFlowData()
      .then((data) => {
        flowData = data;
        console.log('Data refreshed at', new Date());
      })
      .catch((err) => {
        console.error('Data fetch error:', err);
      });
  }, fetchDataInterval);
  
  app.get('/flows', (req, res) => {
    res.status(200).json(flowData);
  });

  app.get('/stats', (req, res) => {
    const sql = "SELECT * FROM stats";

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching stats data:', err);
            res.status(500).json({ error: 'Failed to fetch stats data' });
            return;
        }
        res.json(results);
    });
});

// Route to fetch report data from the master table
app.get('/report', (req, res) => {
    const sql = "SELECT tot_pipes, tot_leaks FROM master";

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching report data:', err);
            res.status(500).json({ error: 'Failed to fetch report data' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Report data not found' });
            return;
        }
        const reportData = results[0]; // Assuming there's only one row in the master table
        res.json(reportData);
    });
});

app.listen(8081, ()=> {

    console.log("Listening");

})