<template>
  <div class="text-center mt-2">
    <h4>Product List</h4>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Brand</th>
        <th scope="col">Image</th>
        <th scope="col">Color</th>
        <th scope="col">Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        {{ product.brand }}
        <td>{{ product.name }}</td>
        <td>{{ product.brand }}</td>
        <td>{{ product.image }}</td>
        <td>{{ product.color }}</td>
        <td>{{ product.weight }}</td>
      </tr>
    </tbody>
    <!-- <tbody v-else>
      <tr>
        <td colspan="7">
          <h5 class="text-center">No products Available</h5>
        </td>
      </tr>
    </tbody> -->
  </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductList",
  computed: mapGetters(["products"]),
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>