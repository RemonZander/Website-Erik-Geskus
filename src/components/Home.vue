<template>
  <div class="flex flex-col min-h-screen">
    <header>
    </header>
    <main class="flex-grow">
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script>

import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    FooterComponent
  },
  name: "HomePage",
}
</script>

<style>

</style>