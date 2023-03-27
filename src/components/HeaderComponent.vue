<template>
    <div class="flex flex-col bg-black text-white pb-[3%]" id="header">
          <h1 class="flex m-auto text-5xl py-6">Erik Geskus</h1>
          <nav class="flex m-auto py-3">
            <ul class="flex flex-row gap-3 lg:gap-5">
              <li>
                <a class="hover-white cursor-default opacity-100" @click="scrollToElementBiografie" ref="biografie">Biografie</a>
              </li>
              <li>
                <a class="hover-white cursor-default" @click="scrollToElementNieuws" ref="nieuws">Nieuws</a>
              </li>
              <li>
                <a class="hover-white cursor-default" @click="scrollToElementDiscografie" ref="discografie">Discografie</a>
              </li>
              <li>
                <a class="hover-white cursor-default" @click="scrollToElementGallerij" ref="gallerij">Gallerij</a>
              </li>
              <li>
                <a class="hover-white cursor-default" @click="scrollToElementContact" ref="contact">Contact</a>
              </li>
            </ul>
          </nav>

          <img src="../assets/Erik.png">
    </div>
</template>

<script>
export default {
  name: "HeaderComponent",

  methods: {
    scrollToElementBiografie() {
      const scrollToElement = document.getElementById(`biography-container`)
      scrollToElement.scrollIntoView({ behavior: 'smooth' });
    },

    scrollToElementNieuws() {
        const scrollToElement = document.getElementById(`news-container`)
        scrollToElement.scrollIntoView({ behavior: 'smooth' });
      },

    scrollToElementDiscografie() {
      const scrollToElement = document.getElementById(`discography-container`)
      scrollToElement.scrollIntoView({ behavior: 'smooth' });
    },

    scrollToElementGallerij() {
      const scrollToElement = document.getElementById(`gallery-container`)
      scrollToElement.scrollIntoView({ behavior: 'smooth' });
    },

    scrollToElementContact() {
      const scrollToElement = document.getElementById(`contact-container`)
      scrollToElement.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
  .hover-white:hover {
    color: lightcoral;
  } 

  @keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
  }

  #header {
    animation: fadeIn;
  }

  img {
    margin: 0 auto;

    height: 400px;
    width: 600px;
  }

  @media (max-width: 600px) {
      img {
      margin: 0 auto;

      height: 300px;
      width: 500px;
    }
  }

  @media (max-width: 500px) {
      img {
      display: none;
    }

    #header {
      padding-bottom: 20%;
    }
  }
</style>