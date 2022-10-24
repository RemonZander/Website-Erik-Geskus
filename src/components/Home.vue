<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <header-vue></header-vue>
    </header>
    <main class="flex-grow">
      Pagina content (Discografie etc) hier
    </main>
    <footer>
      Footer hier
    </footer>
  </div>
</template>

<script>
import HeaderVue from './HeaderVue.vue';

export default {
  components: { HeaderVue },
  name: "HomePage",
}
</script>

<style>

</style>
