<template>
  <div class="flex flex-col min-h-screen">
    <header>
      Header hier
    </header>
    <main class="flex-grow">
      Pagina content (Discografie etc) hier
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "HomePage",
  components: {
    Footer
  }
}
</script>

<style>

</style>