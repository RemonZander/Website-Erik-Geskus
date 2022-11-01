<template xmlns:form="http://www.w3.org/1999/html">
  <div>
    <div class="flex flex-col w-6/12 mb-[2%] pt-[20%]">
      <p class="text-white self-end sm:text-1xl md:text-3xl lg:text-5xl">Contact opnemen</p>
      <div class="h-2 bg-red-800"></div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden ">
      <div class="flex flex-col text-elipsis mt-[2%] pl-[20%]">
        <div class="flex text-1xl lg:text-2xl text-white mb-10">Gëinspireerd geraakt?</div>
      </div>
      <div class="pl-[20%] pr-[20%] text-white opacity-50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tos It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>b-[1%]">
      <div class="pt-[3%] pl-[20%] pb-6 text-white text-2xl">Erik Geskus</div>
    </div>
    <div>
      <div class="flex flex-row items-center gap-2 pl-[20%]">
        <Icon class="text-white" icon="mdi-light:home"></Icon>
        <div class=" text-white opacity-50">06 12 34 58 78</div>
      </div>
    </div>
    <div class="flex flex-row items-center gap-2 pl-[20%]">
      <Icon class="text-white" icon="mdi-light:email"></Icon>
      <div class=" text-white opacity-50">info@erikgeskus.nl</div>
    </div>
    <div class="flex flex-row items-center gap-2 pl-[20%]">
      <Icon class="text-white" icon="mdi-light:youtube-subscription"></Icon>
      <div class="text-white opacity-50">Erik Geskus</div>
    </div>
    <div>
      <form class="">
        <div class="flex flex-col pb-[0.5%] pt-[0.5%] pl-[20%]">
          <label for="naam" class="text-sm text-white">Uw naam</label>
          <input type="text" id="naam" class="rounded-lg input-width-30" placeholder="Voornaam">
        </div>
        <div class="flex flex-col pb=[0.5%] pt-[0.5%] pl-[20%]">
          <label for="email" class="text-sm text-white">UW email</label>
          <input type="text" id="email" class="rounded-lg input-width-30" placeholder="voorbeeld@gmail.com">
        </div>
        <div class="flex flex-col pb-[0.5%] pt-[0.5%] pl-[20%]">
          <label for="vraag" class="text-sm text-white">Uw vraag</label>
          <textarea rows="10" id="vraag" class="rounded-lg input-width-30" placeholder="Ik heb een vraag"></textarea>
        </div>
        <div class="flex flex-col pb-[0.5%] pt-[0.5%] pl-[20%]">
          <button class="rounded-lg bg-green-500 text-white button-width-30">Stuur contactverzoek</button>
        </div>
      </form>
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
  }
}
</script>

<style scoped>
.red-line {
  height: 5px;
  background: darkred;
  width: 61.1%;
}
</style>