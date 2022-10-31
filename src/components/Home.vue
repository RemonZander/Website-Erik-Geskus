<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderComponent/>
    </header>
    <main class="flex-grow">
      <biographyComponent/>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script>

import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import BiographyComponent from "@/components/BiographyComponent";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    BiographyComponent
  },
  name: "HomePage",
}
</script>

<style>

</style>