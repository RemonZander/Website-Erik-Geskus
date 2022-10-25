<template>
  <div>
    <div class="flex justify-center">
      <p class="text-white text-5xl pt-96 opacity-50">Contact opnemen</p>
    </div>
    <div>
      <div class="red-line mb-10"></div>
    </div>
    <div class="flex pl-96 flex-col text-elipsis">
      <div class="text-2xl text-white mb-10">Gëinspireerd geraakt?</div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden">
      <div class="pl-96 text-white opacity-50 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tos It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    <div class="flex justify-center text-white py-6">
      <div class="pb-6">
        <form>
          <div class="flex justify-center flex-col mb-6 bg-orange-800 w-100 rounded-lg">
            <h1 class="font-bold pb-5">Contact formulier</h1>
            <div>
              <label for="naam" class="block mb-2 text-sm font-medium text-gray dark:text-white">Voor & Achternaam</label>
              <input type="text" id="naam" class="shadow-sm bg-black border border-orange-800 text-white text-sm rounded-lg">
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray dark:text-white">Email</label>
              <input type="email" id="email" class="shadow-sm bg-black border border-orange-800 text-white text-sm rounded-lg">
            </div>
            <div>
              <label  for="phoneNumber" class="block mb-2 text-sm font-medium text-gray dark:text-white">Telefoon nummer</label>
              <input type="text" id="phoneNumber" class="shadow-sm bg-black border border-orange-800 text-white text-sm rounded-lg">
            </div>
            <div class="">
              <button @click.prevent="submitForm"  class="bg-green-500 ml-9 rounded-lg mb-3 text-white mt-5 text-center">
                Verzenden
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-col pb-8">
      <div class="pt-12 pl-96 pb-6 text-white text-2xl">Erik Geskus</div>
      <div class="pl-96 pb-2 text-white opacity-50">06 12 34 58 78</div>
      <div class="pl-96 pb-2 text-white opacity-50">info@erikgeskus.nl</div>
      <div class="pl-96 pb-12 text-white opacity-50">Erik Geskus</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
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