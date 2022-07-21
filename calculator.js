var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = this.number1 + this.number2 + this.number3;
      return this.sum;
    },
    multiply: function () {
      console.log(this.number1 * this.number2 * this.number3);
    },
  },
};

Vue.createApp(App).mount("#app");
