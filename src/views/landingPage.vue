<template>
  <div class="landingPage bg-light p-5">
    <Slider
    id="slider"
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      class="d-flex align-items-center"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
        <p id="banner-text" style="line-height: 280px; font-size: 5rem; text-align: center;">
         {{message[index]}}
        </p>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: 'landingPage',
  components: {
    Slider,
    SliderItem
  },
  data () {
    return {
      list: [],
      sliderValue: 2,
      message: [
        'WELCOME',
        'TO',
        'OUR',
        'CONTENT MANAGEMENT SYSTEM'
      ]
    }
  },
  methods: {
    changeIndex (index) {
      this.sliderValue = index
    }
  },
  mounted () {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundColor: '#3f51b5',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: '#eee',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: '#f44336',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: '#eee',
            width: '100%',
            height: '100%'
          }
        ]),
      1000
    )
  }
}
</script>

<style>
#slider {
  height: 80%;
}

.landingPage {
    /* position: static; */
    width: 95vw;
    height: 100%;
    /* height: 95vh; */
    border-radius: 0 1rem 1rem 0;
}
#banner-text {
  margin: 0;
}
</style>
