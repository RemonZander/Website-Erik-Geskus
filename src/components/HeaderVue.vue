<template>
    <div class="flex flex-col bg-black text-white">

        <h1 class="flex m-auto text-5xl py-6">Eric Geskus</h1>

        <svg @click="hideMenu" xmlns="http://www.w3.org/2000/svg" class="m-auto w-12 h-12 md:hidden " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <nav v-if="shown === false" v-bind:class="{stacked: shown === true}" class="flex m-auto py-3 opacity-70">
          <ul>
            <li>
              <a href="#">Biografie</a>
            </li>
            <li>
              <a href="#">Nieuws</a>
            </li>
            <li>
              <a href="#">Discografie</a>
            </li>
            <li>
              <a href="#">Gallerij</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

    </div>
</template>

<script>
export default {
  name: "HeaderVue",
  methods: {
    hideMenu() {
      this.shown = this.shown === false;
    }
  },
  data() {
    return {
      shown: false
    }
  }
}
</script>

<style scoped>
  .stacked {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 414px) {
    .burgerMenu {
      display: flex;
    }
  }

  @media only screen and (min-width: 600px) {
    .burgerMenu {
      display: none;
    }
  }
</style>