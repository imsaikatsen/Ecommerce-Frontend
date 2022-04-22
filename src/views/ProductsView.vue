<template>
  <div class="home">
    <ProductListComp />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListComp from '@/components/products/ProductListComp'

export default {
  name: 'LoginView',
  components: {
    ProductListComp
  }
}
</script>