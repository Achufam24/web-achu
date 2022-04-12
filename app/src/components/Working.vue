<template>
<div>
  <transition name="fade">
  <div v-if="showP" style="margin-top:6rem;">
    <h3>What i am working on</h3>
    <p>My Personal Project with Vuejs,boostrap,vuex</p>
     <div id="C4" class="row3" style="margin-top:3rem;">
  <div class="row">
    <div class="col" id="row6">
      <img src="@/assets/Rectangle24.png" alt="">
      <p>Resto</p>
    </div>
    <div class="col-md-auto" id="row6">
      <img src="@/assets/Rectangle25.png" alt="">
      <p>Agolfarm</p>
    </div>
    <div class="col col-lg-2" id="row6">
      <img src="@/assets/Rectangle23.png" alt="">
      <p>Radify</p>
    </div>
  </div>
</div>
</div>
</transition>
bu
</div>
</template>

<script>
export default {
name:'Working',
data() {
  return {
    showP:true
  }
},
methods: {
  toggleP(){
    this.showP=true
  }
},
}



</script>

<style scoped>
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
.row3{
    height: auto;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    width: 90%;
    font-family: 'Roboto Condensed', sans-serif;
   /* flex-wrap: wrap;
    flex-flow: wrap;
    flex: 1;*/
}
#row6{
    background: #F6F6F6;
    margin-left: 2rem;
    width: 330px;
    text-align: center;
    padding-top:1rem ;
}
img{
    width: 300px !important;
    height: auto;
}
@media only screen and (max-width: 700px){
    .row3{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    #row6{
        width: 80%;
        margin-top: 3rem;
    }
}

</style>