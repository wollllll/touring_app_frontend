<script setup>
import {ref} from "vue";
import {spotService} from "@/services/spotService";

const show = ref(spotService.getters.showSpot())
</script>

<template>
  <div class="carousel carousel-center rounded-box">
    <div class="carousel-item">
      <img
          class="h-20"
          :src="show.image_url"
          :alt="show.title"
      />
    </div>
    <div class="carousel-item">
      <img
          class="h-20"
          :src="show.image_url"
          :alt="show.title"
      />
    </div>
    <div class="carousel-item">
      <img
          class="h-20"
          :src="show.image_url"
          :alt="show.title"
      />
    </div>
    <div class="carousel-item">
      <img
          class="h-20"
          :src="show.image_url"
          :alt="show.title"
      />
    </div>
  </div>
</template>