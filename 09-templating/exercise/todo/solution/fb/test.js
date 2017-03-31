// function Data(name) {
//   this.name = name
//   this.isComplete = true
// }
//
// var test = new Data ('felipe')
// if (test.isComplete) {
//   console.log('hi');
// }

var data = {
  todos: [
    {name: 'Learn HTML', isComplete: true},
    {name: 'Learn css', isComplete: true},
    {name: 'Learn jquery', isComplete: true},
  ]
}
console.log(data.todos[2].name);
