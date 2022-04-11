<template>
    <div>
        <h3>reljlk;ktp</h3>
        <transition name="fade">
            <div v-if="showP">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat quos esse debitis saepe magnam itaque. Nulla aperiam necessitatibus quam quos, quasi illum natus porro quae minus non. Earum, quasi?</p>
            </div>
        </transition>
        <button @click="toggleP">Show</button>
    </div>
</template>

<script>
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
</style>

