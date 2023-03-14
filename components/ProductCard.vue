<script lang="ts" setup>
  import { IProduct } from '~~/types';

  const {product} = defineProps(['product'])

  product as IProduct;
</script>

<template>
  <div class="card text-center flex flex-col">
    <img :src="product.image" alt="product thumb" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">
      {{ product.title }}
    </p>
    <div class="flex-1"></div>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View details</p>
    </NuxtLink>

  </div>
</template>

<style scoped>

  .thumb {
    min-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>
