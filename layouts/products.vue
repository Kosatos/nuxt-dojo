<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/products" class="font-bold">Nuxt Dojo Merch</nuxt-link>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
  </div>

  <footer class="container mx-auto p-4 flex justify-between border-t-4">
    <ul class="flex gap-4">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products">Products</nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(0, 130, 130);
}
</style>
