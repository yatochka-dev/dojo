<script lang="ts" setup>
  import { IProduct } from '~~/types';
  const { product } = defineProps(['product'])

  product as IProduct;
</script>

<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7 max-w-[400px]">
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>

        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description: </h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex items-center text-xl">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to card</span>
        </button>
      </div>
    </div>

  </div>
    
</template>

<style scoped>

</style>
