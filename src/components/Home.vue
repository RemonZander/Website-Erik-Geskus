<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <header>
      <HeaderComponent/>
    </header>
    <main class="flex-grow">
      <BiographyComponent/>
      <NewsComponent/>
      <DiscographyComponent/>
      <GalleryComponent/>
    </main>
    <footer>
      <ContactComponent/>
    </footer>
  </div>
</template>

<script>

import ContactComponent from "@/components/ContactComponent";
import HeaderComponent from "@/components/HeaderComponent";
import BiographyComponent from "@/components/BiographyComponent";
import NewsComponent from "@/components/NewsComponent";
import DiscographyComponent from "@/components/DiscographyComponent";
import GalleryComponent from "@/components/GalleryComponent";

export default {
  components: {
    ContactComponent,
    HeaderComponent,
    BiographyComponent,
    NewsComponent,
    DiscographyComponent,
    GalleryComponent
  },
  name: "HomePage",
}
</script>

<style>
  body {
    scroll-behavior: smooth;
  }
</style>