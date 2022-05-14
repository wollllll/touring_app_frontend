<script setup>
import ViewTitle from '@/components/ViewTitle'
import Base from '@/components/layouts/Base'
import Section from '@/components/layouts/Section'
import ShowSpot from '@/components/spots/Show'
import Profile from '@/components/users/Profile'
import { spots } from '@/fakers/spot'
import { spotService } from '@/services/spotService'
import { storeService } from '@/services/storeService'
import { onUnmounted, ref } from 'vue'

const showSpot = ref(spotService.getters.showSpot())
const setShowSpot = (spot) => {
  spotService.commit.setShowSpot(spot)
  storeService.commit.setIsShowSpotModal(true)
}
onUnmounted(() => {
  spotService.commit.setShowSpot({})
})
</script>

<template>
  <Base>
    <div class="xl:px-64 p-5">
      <Section>
        <ViewTitle>アカウント</ViewTitle>
        <div class="card bg-white shadow">
          <div class="card-body">
            <Profile />
          </div>
        </div>
      </Section>
      <Section>
        <ViewTitle>投稿スポット</ViewTitle>
        <ul class="lg:grid lg:grid-cols-2">
          <li
            :key="spot.id"
            v-for="spot in spots"
            class="lg:odd:mr-auto lg:even:ml-auto lg:col-span-1 mb-6"
            style="width: 98%"
          >
            <ShowSpot :spot="spot" @click="setShowSpot(spot)" />
          </li>
        </ul>
      </Section>
    </div>
  </Base>
</template>
