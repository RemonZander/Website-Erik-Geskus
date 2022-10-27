<template>
  <div>
    <div>
      <p class="text-white text-5xl pt-[20%] pl-[47%]">Contact opnemen</p>
    </div>
    <div>
      <div class="h-2 bg-red-800 w-8/12 mb-[2%]"></div>
    </div>
    <div class="flex pl-[20%] flex-col text-elipsis">
      <div class="text-2xl text-white mb-10">Gëinspireerd geraakt?</div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden">
      <div class="pl-[20%] text-white opacity-50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tos It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    <div class="flex flex-col pb-[1%]">
      <div class="pt-[3%] pl-[20%] pb-6 text-white text-2xl">Erik Geskus</div>
    </div>
    <div>
      <div class="flex flex-row">
        <Icon class="text-white pl-5" icon="mdi-light:phone"></Icon>
        <div class="pl-[20%] pb-[0.5%] text-white opacity-50">06 12 34 58 78</div>
      </div>
    </div>
    <div class="flex flex-row">
      <Icon icon="mdi-light:email"></Icon>
      <div class="pl-[20%] pb-[0.5%] text-white opacity-50">info@erikgeskus.nl</div>
    </div>
    <div class="flex flex-row">
      <Icon icon="mdi-light:youtube"></Icon>
      <div class="pl-[20%] pb-[0.5%] text-white opacity-50">Erik Geskus</div>
    </div>
    <div class="pl-[20%] pb-[5%] pt-[2%]">
      <div class="text-white text-black pb-[3%] pt-[3%] flex flex-col bg-white w-[50%] h-50 place-items-center justify-center rounded-lg">
        <div class="text-2xl pb-[3%]">Contact formulier</div>
        <form>

          <div class="flex flex-col pb-[2%%]">
            <label for="naam" class="text-sm text-black">Uw naam</label>
            <input type="text" id="naan" class="rounded-lg border-2 bg-white w-full dark:text-white ">
          </div>

          <div class="flex flex-col pb-[2%]">
            <label for="email" class="text-sm text-black">Uw email</label>
            <input type="text" id="email" class="rounded-lg border-2 border-red-400 focus:border-red-800 bg-white w-full dark:text-white">
          </div>

          <div class="flex flex-col pb-[2%]">
            <label for="email" class="text-sm text-black">Uw vraag</label>
            <input type="text" id="email" class="rounded-lg border-2 bg-white w-full dark:text-white">
          </div>

          <div class="flex flex-col pb-[2%] mt-[4%]">
            <button class="rounded-lg bg-red-500 text- pl-[2%]">Contactverzoek opsturen</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "FooterComponent",
  components: {Icon},
  methods: {
    submitForm() {
      /**
       * TODO Add submit and email functionality
       */
    }
  },
}
</script>

<style scoped>
.red-line {
  height: 5px;
  background: darkred;
  width: 61.1%;
}

.has-input {
  border-color: green;
}
</style>