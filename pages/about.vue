<template>
  <div>
    <h2 class="text-3xl font-bold mb-2">About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
      debitis adipisci aliquid, ipsam minus repudiandae deserunt rem atque
      excepturi ducimus.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
      debitis adipisci aliquid, ipsam minus repudiandae deserunt rem atque
      excepturi ducimus.
    </p>
    <div class="text-2xl text-blue-900">{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/RUB')
</script>

<style scoped></style>
