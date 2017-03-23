// SETUP tables and stuff under vagrant/docker
// CREATE TABLE todos (
// id varchar(80) PRIMARY KEY,
// description varchar(80),
// completed varchar(80),
// date_created timestamp,
// date_updated timestamp
// );

// Pokedex database (only names of ones you caught)
const express = require('express');
const pg = require('pg');

const app = express();

const client = new pg.Client({
  user: 'postgres',
  password: '',
  database: 'postgres',
  host: 'localhost',
  port: 5432
});

app.get('/', (req, res) => {
  console.log('got /');
  res.json({
    '/': '/'
  })
});

// list pokemons
app.get('/pokemons', (req, res) => {
  console.log('get todos');
  client.query('SELECT * FROM todos', (err, result) => {
    if (err) {
      return res.json({
        error: err,
      })
    }
    const todos = result.rows[0];
    res.json({
      items: todos,
    });
  });
});

// insert a new pokemon
app.post('/pokemons', (req, res) => {
  console.log('post');
  client.query('INSERT INTO pokemons VALUES $1', [req.pokemon], (err, result) => {
    if (err) {
      return res.json({
        error: err,
      })
    }
    res.json({
      items: todos,
    });
  });
});

// remove a pokemon
app.delete('/pokemons/:name', (req, res) => {
  console.log('delete');
  res.json({
    '/todos': 'delete todo'
  })
});

app.listen(3000, (req, res) => {
  console.log('server started on port ', 3000);
});
