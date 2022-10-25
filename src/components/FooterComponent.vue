<template>
  <div>
    <div class="flex justify-center">
      <p class="text-white text-5xl pt-96 opacity-50">Contact opnemen</p>
    </div>
    <div>
      <div class="red-line mb-10"></div>
    </div>
    <div class="flex pl-96 flex-col">
      <div class="text-2xl text-white mb-10">Gëinspireerd geraakt?</div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden">
      <div class="pl-96 text-white opacity-50 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tos It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    <div class="flex flex-col">
      <div class="pt-12 pl-96 pb-12 text-white text-2xl">Erik Geskus</div>
      <div class="pl-96 pb-2 text-white opacity-50">06 12 34 58 78</div>
      <div class="pl-96 pb-2 text-white opacity-50">info@erikgeskus.nl</div>
      <div class="pl-96 pb-12 text-white opacity-50">Erik Geskus</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped>
.red-line {
  height: 5px;
  background: darkred;
  width: 61.1%;
}
</style>
