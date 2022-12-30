<template>
  <header class="fixed w-full top-0 z-10">
    <nav class="max-w-7xl mx-auto navigation justify-between">
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo.png" alt="" class="w-20 items-center">
      </NuxtLink>
      
      <div id="social" class="flex items-center dark:text-gray-800 text-gray-800">
              <NuxtLink to="https://www.instagram.com/nevrastudio">
                  <Icon name="grommet-icons:instagram" class="w-6 h-6 m-2" />
              </NuxtLink>
          </div>

    </nav>

  </header>
</template>

<script>

export default {

}

</script>

<style>
.navigation {
  @apply flex;
  @apply p-5;
  @apply space-x-5;
}
</style>