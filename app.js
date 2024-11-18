const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
/////////////////////////////////////////MongoDB Connection/////////////////////////////////////////
mongoose
  .connect('mongodb+srv://user:test@cluster0.z7mzxfj.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
/////////////////////////////////////////////////////////////////////////////////////////////
const todoSchema = new mongoose.Schema({
  taskName: String,
});

const Todo = mongoose.model('Todo', todoSchema);

///////////////////Show exisiting items//////////////////////////////////////////////////////
app.get('/', async function(req, res) {
  try {
    const todos = await Todo.find({}).exec();
    res.render('index', { newTasks: todos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
////////////////////////////////////Post new items//////////////////////////////////
app.post('/', function(req, res) {
  const todoName = req.body.taskName;
  const newTodo = new Todo({
    taskName: todoName,
  });

  newTodo.save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});
///////////////////////////Edit existing item////////////////////////////////////
//app.put('/todos/:id', function(req, res) {
 // const todoId = req.params.id;
  //const updatedTodoName = req.body.updatedTaskName;
  //Todo.findByIdAndUpdate(todoId, { taskName: updatedTodoName })
   // .then(() => {
     // res.redirect('/');
    //})
    //.catch(err => {
     // console.error(err);
      //res.status(500).send('Internal Server Error');
   // });
//});
////////////////////////////////Delete Existing item///////////////////////////
app.delete('/todos/:id', function(req, res) {
  const todoId = req.params.id;
  Todo.findByIdAndRemove(todoId)
    .then(() => {
      Todo.find({})
        .then(todos => {
          res.render('index', { newTasks: todos });
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Internal Server Error');
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});
///////////////////Server connection/////////////////////////////////
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
