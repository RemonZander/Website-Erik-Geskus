<template xmlns:form="http://www.w3.org/1999/html">
  <div id="contact-container">
    <div class="flex flex-col w-6/12 mb-7">
      <p class="item-left text-white self-end text-3xl">Contact / Booking</p>
      <div class="h-2 bg-red-800"></div>
    </div>
    <div class="flex flex-col text-clip overflow-hidden ">
      <div class="flex flex-col text-elipsis mt-5 pl-[20%]">
        <div class="flex text-2xl text-white mb-10">Geinspireerd geraakt?</div>
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
      <div class="flex flex-row w-100">
        <div class="appointlet-inline" style="width: 40vw; float: right; justify-content: right; margin-left: 7.5vw; margin-top: 5vh; margin-bottom: 2vh;" data-appointlet-inline="https://appt.link/meet-with-hendrik-isaac-geskus-Bb6gZYLw"></div>
        <div class="flex flex-col items-center content-center " style="align-content: flex-end; margin-left: 10vw; background-color: white; height: 93vh; width: 35vw; margin-top: 5vh;">
          <input type="text" placeholder="Je bericht" class="border-black"/>
        </div>
      </div>
      <link href="https://js.appointlet.com/styles.css" rel="stylesheet">
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: "FooterComponent",
  mounted() {
    axios.defaults.baseURL = "http://localhost:5000"
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://js.appointlet.com/";
    document.body.appendChild(scriptTag);
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
</style>
