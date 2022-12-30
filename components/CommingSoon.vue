<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <!-- top background -->
    <div class="z-0">
      <img src="/img/spray_blue_2.png" class="fixed top-14 lg:top-14 left-0 lg:left-20 xl:left-56 w-3/4 md:w-3/6 lg:w-5/12 xl:w-4/12">
      <img src="/img/aerosol_orange.png" class="fixed top-28 left-20 lg:left-40 xl:left-72 w-3/4 md:w-3/6 lg:w-5/12 xl:w-4/12">
    </div>
    <!-- text -->
    <div class="flex flex-col justify-center items-center -mt-10 z-10">
      <h1 class="font-futura_book text-2xl">
          nevra studio
      </h1>
      <span class="font-futura_book text-2xl">
          is
      </span>
      <CrayText class="text-4xl md:text-6xl lg:text-7xl" />
    </div>

    <!-- bot background -->
    <div class="z-0">
      <img src="/img/spray_orange_1.png" alt="" class="fixed bottom-10 left-0 md:left-36 lg:left-52 xl:left-1/3 w-3/4 md:w-3/6 lg:w-5/12 xl:w-4/12">
      <img src="/img/spray_blue_1.png" alt="" class="fixed bottom-10 left-24 md:left-80 lg:left-96 xl:left-1/2 w-3/4 md:w-3/6 lg:w-5/12 xl:w-3/12">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.animated-bg {
  /* doing erase in effect */
   animation: 1s ease-out 0s 1;
}
</style>