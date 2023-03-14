export default defineEventHandler(async (event) => {
  
    const { code } = event.context.params as {
      code: string;
    }
    const {currencyKey} = useRuntimeConfig()

    const uri = new URL(`https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`)

    const {data} = await $fetch<{data: any}>(uri.toString())

    return data;



})
