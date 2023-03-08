export default defineEventHandler(async (evt) => {
  // //handle query params
  // const { name } = getQuery(evt)

  // // handle post data
  // const { age } = await readBody(evt)

  //api call with private key
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=fRRbyYWO3mk7Z5kLrYr5jZ9wxH48cjvhjLsKU2xG'
  )
  return data
})
