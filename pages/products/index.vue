<script lang="ts" setup>
  definePageMeta({
    layout: 'products',
  })

  const {data: products} = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: "Nuxt Dojo | Products",
    meta: [
      {
        name: 'description',
        content: 'Nuxt 3 merch'
      }
    ]
  })
</script>

<template>
  <div>
   <div class="grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
    <div v-for="p in products">
      <ProductCard :product="p"/>

    </div>
   </div>
  </div>
</template>

<style scoped></style>
