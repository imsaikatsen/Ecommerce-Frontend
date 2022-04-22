<template>
  <div class="home">
    <ProductComp />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductComp from '@/components/ProductComp.vue'

export default {
  name: 'LoginView',
  components: {
    ProductComp
  }
}
</script>