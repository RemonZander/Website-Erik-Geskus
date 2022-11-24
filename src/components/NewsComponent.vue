<template>

    <div class="w-1/2 float-right">
      <div class="width-[40%] align-right mb-[10%] pt-[10%]">
        <p class="text-white text-3xl align-items-end">Nieuwsoverzicht</p>
        <div class="h-2 bg-red-800"></div>
      </div>
      <div class="inline-flex">
        <div class="">
        <h2 class="text-xl" id="title">Recenste YouTube Post</h2>
        <p class="pt-2 text-white opacity-50" id="date">19 Maart 2022</p>
        </div>
        <iframe class="pl-[15%]" width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
      <div class="flex flex-col pt-2 text-white opacity-50" id="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos pariatur modi maxime omnis? Dolores facere facilis nemo aperiam sapiente porro necessitatibus hic voluptatem, nesciunt temporibus sunt debitis perspiciatis molestiae?
      <a class="pt-2 underline underline-offset-3" href="#">Meer Lezen?</a>
      </div>

    </div>  
  </template>

<script>
 export default {
  name: "NewsComponent",
}
</script>

<style scoped>
</style>
