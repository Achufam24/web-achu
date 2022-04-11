<template>
<div style="margin-top:6rem;">
    <h3>My Projects</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae faci</p>
     <div id="C4" class="row3" style="margin-top:3rem;">
  <div class="row">
    <div class="col" id="row6">
      <img src="@/assets/Rectangle1.png" alt="">
      <p>Altalabs</p>
    </div>
    <div class="col-md-auto" id="row6">
      <img src="@/assets/Rectangle24.png" alt="">
      <p>Kaakuna</p>
    </div>
    <div class="col col-lg-2" id="row6">
      <img src="@/assets/Rectangle.png" alt="">
      <p>Bawo</p>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
name:'Project'
}
</script>

<style scoped>
.row3{
    height: auto;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    width: 90%;
    font-family: 'Rubik Bubbles', cursive;
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
