<template>

        <div class="flex flex-row-reverse" id="news-container">

          <div class="w-3/4 float-right">
            <div class="width-[40%] align-right mb-[5%]">
            <p class="text-white text-3xl align-items-end">Nieuws</p>
            <div class="h-2 bg-red-800"></div>
            </div>
          </div>

          <div class="w-full"></div>

        </div>

        <div class="flex flex-col">

          <div class="animate-pulse" id="right">
            <iframe class="float-right" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

          <div class="animate-pulse" id="left">
            <iframe class="float-left" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>
   
        </div>

        <div class="flex flex-col">

          <div class="animate-pulse" id="right">
            <iframe class="float-right" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

          <div class="animate-pulse" id="left">
            <iframe class="float-left" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

        </div>

</template>

<script>
  import request from '../axios'
  export default {
    name: "NewsComponent",
    mounted() {
      this.getVideos()
    },
    methods: {
      async getVideos() {
        request.get(this.endpoint, {
          params: {
            key: this.key,
            part: "snippet",
            maxResults: 1,
            q: "Erik Geskus"
          }
        }).then(response => {
          console.log(response.data.items[0].snippet.title)
          console.log(response.data.items[0].snippet.publishedAt)
          console.log(response.data.items[0].snippet.description)
          console.log(response.data.items[0].snippet.thumbnails.high.url)
        }, error => {
          console.log(error)
        })
      }
    },
    data() {
      return {
        key: "AIzaSyC6ra2NopgUXrC48zlznLJK6SL7TUGXypg",
        endpoint: "/youtube.search.list"
      }
    }
  }
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

#right, #left {
  animation: fadeIn;

  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 20px;
}

@media (max-width: 750px) {
  iframe {
    width: 300px;
    height: 210px;
  }

  #right, #left {
  animation: fadeIn;

  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
}
}
</style>
