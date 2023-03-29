<template>
    <div class="" id="gallery-container">

        <div class="flex flex-col w-4/12 mb-[2%]">
          <p class="item-left text-white self-end text-3xl">Gallerij</p>
          <div class="h-2 bg-red-800"></div>
        </div>

        <div class="w-full"></div>

        </div>

        <div class="flex flex-col" id="col-1">

          <div class="animate-pulse" id="left">
            <iframe class="float-left" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

          <div class="animate-pulse" id="right">
            <iframe class="float-right" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

        </div>

        <div class="flex flex-col" id="col-2">

          <div class="animate-pulse" id="left">
            <iframe class="float-left" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

          <div class="animate-pulse" id="right">
            <iframe class="float-right" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="500" height="410"></iframe>
          </div>

    </div>

</template>
  
<script>
  export default {
    name: "GalleryComponent"
  }
</script>
  
<style scoped>
  #right, #left {
    animation: fadeIn;

    margin-right: 40px;
    margin-left: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 550px) {
    iframe {
      float: none;
    }

    #col-1, #col-2 {
      display: flex;
      align-items: center;
      align-content: center;
    }
  }

  @media (max-width: 750px) {
    iframe {
      width: 300px;
      height: 210px;
    }

    #right, #left {
    animation: fadeIn;

    margin-right: 25px;
    margin-left: 25px;
    margin-bottom: 45px;
    }
  }
</style>