<script lang="ts" setup>
  import { IProduct } from '~~/types';
  // get query params
  const { id } = useRoute().params
  const uri = "https://fakestoreapi.com/products/" + id


  const { data: product } = await useFetch<IProduct>(uri, {key: String(id)})

  if (!product.value) {
    throw createError({
      statusCode: 404,
      message: 'Product not found', 
      fatal: true
    })
  }

  definePageMeta({
    layout: 'products',
  })

</script>

<template>
  <Head>
    <Title>Nuxt Dojo | {{ product.title }}</Title>
    <Meta name="description" :content="product?.description"></Meta>
  </Head>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<style scoped></style>
