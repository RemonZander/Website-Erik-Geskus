<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderComponent/>
    </header>
    <main class="flex-grow">
      <BiographyComponent/>
      <NewsComponent/>
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
import NewsComponent from "./NewsComponent.vue";

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    BiographyComponent,
    NewsComponent
  },
  name: "HomePage",
}
</script>

<style>

</style>