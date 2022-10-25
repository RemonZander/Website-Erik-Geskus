<template>
  <div class="flex flex-col bg-black text-white">
    <h1 class="flex m-auto text-5xl py-6">Eric Geskus</h1>
    <nav class="flex m-auto py-3 opacity-70">
      <ul class="flex flex-row gap-4">
        <li>
          <a class="hover-white" href="#biografie">Biografie</a>
        </li>
        <li>
          <a class="hover-white" href="#nieuws">Nieuws</a>
        </li>
        <li>
          <a class="hover-white" href="#discografie">Discografie</a>
        </li>
        <li>
          <a class="hover-white" href="#gallerij">Gallerij</a>
        </li>
        <li>
          <a class="hover-white" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
}
</script>

<style scoped>
.hover-white:hover {
  color: lightcoral;
}
</style>