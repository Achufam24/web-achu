<template>
<div  class="container-fluid">
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
