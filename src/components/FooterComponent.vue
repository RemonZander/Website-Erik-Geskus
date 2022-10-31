<template>
  <div>
    <div class="flex flex-col w-6/12 mb-[2%] pt-[20%]">
      <p class="item-left text-white self-end text-3xl ">Contact opnemen</p>
      <div class="h-2 bg-red-800"></div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden ">
      <div class="flex flex-col text-elipsis mt-[2%] pl-[20%]">
        <div class="flex text-1xl lg:text-2xl text-white mb-10">Gëinspireerd geraakt?</div>
      </div>
      <div class="pl-[20%] pr-[20%] text-white opacity-50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tos It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
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
    <div class="pl-[20%] pt-[1%]">
      <form>
        <div class="flex flex-col">
          <label class="text-white" for="naam">Uw naam</label>
          <input type="text" class="">
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
