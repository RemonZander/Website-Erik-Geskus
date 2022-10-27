<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderComponent/>
    </header>
    <main class="flex-grow">
      <GalleryComponent/>
    </main>
    <footer>
      <FooterComponent/>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import GalleryComponent from "@/components/GalleryComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    HeaderComponent,
    GalleryComponent,
    FooterComponent
  },
  name: "HomePage",
}
</script>

<style>

</style>
