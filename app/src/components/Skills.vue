<template>
<transition name="fade" appear>
   <div  class="container-fluid rotate">
    <div class="container-fluid d-flex" id="row9">
        <div class="container-fluid" id="row6">
        <img src="@/assets/Group4.png" class="img-fluid" alt="">
    </div>
    <div class="container-fluid" id="row6">
     <img src="@/assets/Group2.png" class="img-fluid" alt="">
    </div>
    <div class="container-fluid" id="row6">
        <img src="@/assets/Group2.png" class="img-fluid" alt="">
    </div>
    <div class="container-fluid" id="row6">
        <img src="@/assets/Group4.png" class="img-fluid" alt="">
    </div>
    </div>
</div>
</transition>
</template>

<script>
export default {
  name:'Skills'
}
</script>

<style scoped>
#row9{
    background: #2D4AE029;
    height: 300px;
    padding-top: 2rem;
}
 img{
    width: 250px !important;
}
.fade-enter-from{
  opacity: 0;
  transform: translateY(300px)
}
.fade-enter-to{
  opacity: 1;
  transform: translateY(0px)
}
.fade-enter-active{
  transition: all 3s ease;
}
.fade-leave-from{
 opacity: 1;
  transform: translateY(0)
}
.fade-leave-to{
opacity: 0;
transform: translateY(300px)
}
.fade-leave-active{
  transition: all 3s ease;
}
@keyframes wobble {
  0% {transform: translateY(300px); opacity: 0}
  50% {transform: translateY(0px); opacity: 1;}
}
@media only screen and (max-width: 700px){
    #row9{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: auto;
    }
    #row6{
        width: 80%;
        margin-top: 3rem;

    }
}
</style>
