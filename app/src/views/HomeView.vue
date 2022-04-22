<template>
  <div class="main">
    <Header/>
    <Skills id="section-one"/>
    <Project id="section-two"/>
    <Services id="section-three"/>
    <Working/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Skills from '@/components/Skills.vue'
import Project from '@/components/Project.vue'
import Services from '@/components/Services.vue'
import Working from '@/components/Working.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'

export default {
  name: 'Home',
  components: {
    Header,
    Skills,
    Project,
    Services,
    Working,
    Footer
  }
}
</script>

<style>
.main {
  scroll-behavior: smooth;
}
/*.rotate {
  animation: rotation 1s  linear;
  animation-delay: 0s;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}*/
</style>
