<template>
  <div>
    <div class="flex flex-col w-6/12 mb-[2%] pt-[20%]">
      <p class="text-white text-3xl self-end lg:text-5xl">Contact opnemen</p>
      <div class="h-2 bg-red-800"></div>
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
      <div class="flex flex-row items-center gap-2 pl-[20%]">
        <Icon class="text-white pl-5" icon="mdi-light:phone"></Icon>
        <div class=" text-white opacity-50">06 12 34 58 78</div>
      </div>
    </div>
    <div class="flex flex-row items-center gap-2 pl-[20%]">
      <Icon class="text-white" icon="mdi-light:email"></Icon>
      <div class=" text-white opacity-50">info@erikgeskus.nl</div>
    </div>
    <div class="flex flex-row items-center gap-2 pl-[20%]">
      <Icon class="text-white" icon="mdi-light:youtube"></Icon>
      <div class=" text-white opacity-50">Erik Geskus</div>
    </div>
    <div class="pl-[20%] pb-[5%] pt-[2%]">
      <div class="text-white pb-[3%] pt-[3%] flex flex-col bg-black w-[15%] place-items-center justify-center rounded-lg">
        <div class="text-2xl pb-[3%]">Contact formulier</div>
        <form class="">
          <div class="flex flex-col pb-[2%]">
            <label for="naam" class="text-sm text-white">Uw naam</label>
            <input type="text" id="naam" class="rounded-lg border-2 bg-white hover:border-red-800 w-full text-black">
          </div>

          <div class="flex flex-col pb-[2%]">
            <label for="naam" class="text-sm text-white">Uw email</label>
            <input type="text" id="email" class="rounded-lg border-2 bg-white hover:border-red-800 w-full text-black">
          </div>

          <div class="flex flex-col pb-[2%]">
            <label for="vraag" class="text-sm text-white">Uw vraag</label>
            <textarea id="vraag" class="rounded-lg border-2 bg-white hover:border-red-800 w-full text-black"> </textarea>
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
  focusAddBorder() {

  }
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