const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5886d00b82b193564e09d0b2'}).then((todo) => {

});

Todo.findByIdAndRemove('5886d00b82b193564e09d0b2').then((todo) => {
  console.log(todo);
});
