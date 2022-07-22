/* global Vue */

var App = {
  data: function () {
    return {
      message: "Do all this stuff!!",
      todos: [],
    };
  },
  created: function () {
    this.loadTodos();
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    createToDo: function () {
      var params = {};
      axios.post("https://jsonplaceholder.typicode.com/todos", params).then((response) => {
        var todo = response.data;
        this.todos.push(todo);
        console.log(response.data);
      });
    },
  },
};
Vue.createApp(App).mount("#app");
