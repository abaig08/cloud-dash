const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');

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
  
  const fetchDataInterval = 60000; // 10 minutes in milliseconds
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

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dummybot4003@gmail.com',
    pass: 'oxft fief bzvy kkgm' // Use the app password generated for your Gmail account
  }
});

// Endpoint to handle sending email notifications
app.post('/send-email-notifications', (req, res) => {
  const sql = `SELECT * FROM flow WHERE status = 0`; // Select rows with status = 0 (OFF)

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching flow data:', err);
      res.status(500).json({ error: 'Failed to fetch flow data' });
      return;
    }

    // Iterate over flow records with status = 0 (OFF)
    results.forEach(flow => {
      const { timestamp, flow1, flow2, status, area_code, email } = flow;

      const mailOptions = {
        from: 'dummybot4003@gmail.com',
        to: email, // Send email to the recipient from flow record
        subject: `Flow Status Alert - Area Code ${area_code}`,
        text: `Dear recipient,\n\nThe flow status for Area Code ${area_code} is OFF.\n\nFlow1: ${flow1}\nFlow2: ${flow2}\nTimestamp: ${timestamp}\n\nRegards,\nYour App Team`
      };

      // Send email using Nodemailer transporter
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email sending error:', error);
        } else {
          console.log(`Email sent to ${email} successfully`);
        }
      });
    });

    res.status(200).json({ message: 'Email notifications sent successfully' });
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