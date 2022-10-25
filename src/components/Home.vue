<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderComponent/>
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
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {
    FooterComponent,
    HeaderComponent
  },
  name: "HomePage",
}
</script>

<style>

</style>