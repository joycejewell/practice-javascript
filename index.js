/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Joyce Jewell",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Yeah!!!";
      this.name = "Stella Dora";
    },
    changeMessageAgain() {
      this.message = "I know right?!";
    },
  },
};

Vue.createApp(App).mount("#app");
