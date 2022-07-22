/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      products: [],
    };
  },
  created: function () {
    this.loadProducts();
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    createProduct: function () {
      var params = {
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        price: this.price,
        tax: this.tax,
        total: this.total,
      };
      axios.post("http://localhost:3000/products.json", params).then((response) => {
        var product = response.data;
        this.todo.ppush(todo);
        console.log(response.data);
      });
    },
  },
};

Vue.createApp(App).mount("#app");
