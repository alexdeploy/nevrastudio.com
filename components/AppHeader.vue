<template>
  <header class="sticky w-full top-0 z-10 backdrop-blur-md">
    <nav class="max-w-7xl mx-auto navigation justify-between">
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo.png" alt="" class="w-20 items-center">
      </NuxtLink>
      
<!--       <ul class="hidden lg:flex space-x-5 items-center">
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul> -->
      <!-- Burger icon -->
      <NuxtLink @click="toggleMobileMenu()" class="flex lg:hidden">
        <Icon name="mingcute:menu-line" class="text-blue-nevra w-6 h-6 m-2" />
      </NuxtLink>

    </nav>

    <!-- <MobileMenu class="hidden mobile-menu fadeIn" /> -->

  </header>
</template>

<script>

export default {

/*   methods: {
    toggleMobileMenu(){
      // Toggle mobile menu
      document.querySelector('.mobile-menu').classList.toggle('hidden')
    }
  } */
}

</script>

<style>
.navigation {
  @apply flex;
  @apply p-5;
  @apply space-x-5;
}
</style>