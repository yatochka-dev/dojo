
export default defineEventHandler(async (event) => {

  const {data} = await $fetch<{data: any}>("https://api.currencyapi.com/v3/latest?apikey=LHuKhaWgC8DO2QaoKaWZmiLOTFWgYvkzM9LGGJlB")

  return data;
  
})
