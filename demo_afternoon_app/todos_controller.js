angular.module('AfternoonApp').controller('TodosController', TodosController);

function TodosController(){
  var todos = this;

  todos.all = [];

  todos.add = function(){
    todos.all.push({task: todos.new, isComplete: false});
    todos.new = "";
  }
}
