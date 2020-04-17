<template>
  <div class="landingPage bg-light p-5">
    <Slider
    id="slider"
      animation="fade"
      v-model="sliderValue"
      :duration="1000"
      :speed="1000"
      class="d-flex align-items-center"
    >
      <SliderItem
      id="sliderItem"
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
        <p style="line-height: 280px; font-size: 5rem; text-align: center;">
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
      sliderValue: 0,
      message: [
        'WELCOME',
        'TO',
        'E-COMMERCE',
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
            backgroundColor: 'yellow',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: '#f44336',
            width: '100%',
            height: '100%'
          },
          {
            backgroundColor: 'orange',
            width: '100%',
            height: '100%'
          }
        ]),
      100
    )
  }
}
</script>

<style>
#slider {
  text-align: center ! important;
  height: 98% ! important;
  border-radius: 10px;
}

#sliderItem {
  display: flex ! important;
  justify-content: center ! important;
  align-items: center ! important;
}

.landingPage {
    width: 95vw;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
}
p {
  margin: 0;
  font-family: 'Monoton', cursive;
}
</style>
