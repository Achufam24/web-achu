<template>
    <div>
        <h3>reljlk;ktp</h3>
        <div ref="box" class="box"></div>
      <!--  <transition name="fade">
            <div v-if="showP">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat quos esse debitis saepe magnam itaque. Nulla aperiam necessitatibus quam quos, quasi illum natus porro quae minus non. Earum, quasi?</p>
            </div>
        </transition>-->
        <button @click="toggleP">Show</button>
    </div>
</template>

<script>
import { TimelineLite, Back } from 'gsap'

export default {
data() {
    return {
        showP:false
    }
},
methods: {
    toggleP(){
        this.showP= !this.showP
    }
},
 mounted() {
    const { box } = this.$refs
    const timeline = new TimelineLite()
    
    timeline.to(box, 1, {
      x: 200,
      rotation: 90,
      ease: Back.easeInOut, // Specify an ease
    })
    timeline.to(box, 0.5, {
      background: 'green'
    },
    '-=0.5' // Run the animation 0.5s early
    )
  },
}
</script>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: all 10s ease;
}
.fade-leave-from{
 opacity: 1;
}
.fade-leave-to{
opacity: 0;
}
.fade-leave-active{
  transition: all 10s ease;
}
.box{
  width: 200px;
  height: 100px;
  background: red;
}
</style>

