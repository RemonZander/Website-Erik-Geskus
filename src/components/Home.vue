<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderComponent/>
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
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    HeaderComponent
  },
  name: "HomePage",
}
</script>

<style>

</style>
