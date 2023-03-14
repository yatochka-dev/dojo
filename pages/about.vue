<script lang="ts" setup>
let currencyCode = ref('USD')

const {data, refresh, pending, error} = useAsyncData('code', () => $fetch("/api/currency", {method: "post", body: {code: currencyCode.value}}))

</script>

<template>
  <div>
    
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod impedit quo voluptate doloribus, sint porro voluptas. Eveniet, repellat. Deleniti quo est accusantium veritatis odit. Accusantium obcaecati natus dolores veritatis?</p>
    <p>Earum sequi libero temporibus ipsa, autem doloremque aut impedit asperiores ex laborum dolore sunt, explicabo officiis animi architecto iusto inventore distinctio eaque recusandae minus error facilis exercitationem nostrum eum. A?</p>
    <div class="flex flex-col gap-5">
      <div v-if="pending">Loading data...</div>
      <div v-else-if="!!error">Something went wrong {{ error }}</div>
      <div v-else>{{ data }}</div>
    <input type="text" v-model="currencyCode" class="input">
    <button class="btn" @click="() => refresh()">Re fetch code data</button>
    </div>
  </div>
</template>

<style>

h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}

</style>
