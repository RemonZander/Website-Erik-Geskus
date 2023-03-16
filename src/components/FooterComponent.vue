<template xmlns:form="http://www.w3.org/1999/html">
  <div>
    <div class="flex flex-col w-6/12 mb-7 pt-[20%]">
      <p class="item-left text-white self-end text-3xl">Contact</p>
      <div class="h-2 bg-red-800"></div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden ">
      <div class="flex flex-col text-elipsis mt-5 pl-[20%]">
        <div class="flex text-2xl text-white mb-10">Gëinspireerd geraakt?</div>
      </div>
      <div class="pl-[20%] pr-[20%] text-white opacity-50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tos It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div class="pt-7 pl-[20%] pb-6 text-white text-2xl">Erik Geskus</div>
    </div>
    <div>
      <div class="flex flex-row items-center gap-2 pl-[20%]">
        <div class=" text-white opacity-50">06 12 34 58 78</div>
      </div>
    </div>
    <div class="flex flex-row items-center gap-2 pl-[20%]">
      <div class=" text-white opacity-50">info@erikgeskus.nl</div>
    </div>
    <div class="flex flex-row items-center gap-2 pl-[20%]">
      <div class="text-white opacity-50">Erik Geskus</div>
    </div>
    <div>
      <form class="">
        <div class="flex flex-col pt-10 pl-[20%]">
          <div class="flex text-2xl text-white mb-10">Contact Formulier</div>
          <label for="naam" class="text-sm text-white pb-2">Uw naam</label>
          <input v-model="nameValue" type="text" id="naam" class="w-2/3 sm:w-1/3 rounded-lg text-black" placeholder="Voornaam">
        </div>
        <div class="flex flex-col pt-5 pl-[20%]">
          <label for="email" class="text-sm text-white pb-2">Uw email</label>
          <input v-model="emailValue" type="text" id="email" class="w-2/3 sm:w-1/3 rounded-lg text-black" placeholder="voorbeeld@gmail.com">
        </div>
        <div class="flex flex-col pt-5 pl-[20%]">
          <label for="vraag" class="text-sm text-white pb-2">Uw vraag</label>
          <textarea v-model="questionValue" rows="10" id="vraag" class="w-2/3 sm:w-1/3 rounded-lg text-black" placeholder="Ik heb een vraag"></textarea>
        </div>
        <div class="flex flex-col pt-10 pb-10 pl-[20%]">
          <button @click.prevent="submitForm" class="w-2/3 sm:w-1/3 rounded-lg bg-red-800 hover:bg-red-600 text-white">Stuur contactverzoek</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: "FooterComponent",
  mounted() {
    axios.defaults.baseURL = "http://localhost:5000"
  },
  methods: {
   async submitForm() {
      if (this.nameValue && this.emailValue && this.questionValue) {
        axios.post('/sendmail', {
          from: this.nameValue,
          email: this.emailValue,
          question: this.questionValue
        }).then(response => {
          console.log(response)
        })
      } else {
        alert("Één of meerdere verplichte velden zijn niet ingevuld op het contact formulier")
      }
    }
  },
  data() {
    return {
      nameValue: '',
      emailValue: '',
      questionValue: ''
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
