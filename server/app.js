const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mall_shops",
  });

  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });



app.listen(8000, () => {console.log("app started ))))))!")});

app.get('/shops', (req, res) =>{

    const sql = 'SELECT * FROM shops';

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        res.json(results);
    });

});

app.get('/services', (req, res) => {
  const sql = 'SELECT * FROM services';

  connection.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      
      res.json(results);
  });
});

app.get('/restaurants', (req, res) => {
  const sql = 'SELECT * FROM restaurants';

  connection.query(sql, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      
      res.json(results);
  });
});



