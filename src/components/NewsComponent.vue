<template>

    <div class="" id="youtube-container">

        <div class="w-1/2 float-right">
          <div class="width-[40%] align-right mb-[5%]">
          <p class="text-white text-3xl align-items-end">Nieuws</p>
          <div class="h-2 bg-red-800"></div>
          </div>
        </div>

        <div class="flex flex-row-reverse pt-[1%] float-right">

          <iframe class="text-center float-right block mx-5 mb-5 " src="https://www.youtube.com/embed/tgbNymZ7vqY" width="400" height="310"></iframe>

          <div class="w-[17%] text-justify">
            <h2 class="text-xl" id="title">Recenste Youtube Post</h2>
            <p class="text-white pt-2 opacity-50" id="date">19 Maart 2022</p>
            <p class="text-white pt-2 opacity-50" id="paragraph">
                  Est iusto dolor itaque mollitia perferendis? dolor sit, amet consectetur adipisicing elit. Tempora architecto nemo quibusdam iusto eaque qui nihil ipsa delectus, id culpa! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa assumenda asperiores consequuntur ea quos libero? Exercitationem aspernatur totam nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo consectetur unde enim omnis in provident, molestias aliquam aut ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis quos libero dicta, asperiores aspernatur sunt cupiditate provident aperiam architecto.
            </p>
            
        </div>


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
</style>
