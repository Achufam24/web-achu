<template>
<transition name="fade" appear>
    <div class="row4">
        <h3 style="text-align:left;">Teaching My<br><span style="color:blue;">Superpower</span></h3>
        <div class="container-fluid" id="row4" style="display:flex;">
            <blockquote class="col-sm-6"><span class="quote">&ldquo;</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate augue dolor dolor faucibus sapien sed sodales. Netus sit aenean iaculis eget elit ut parturient. Lectus sodales vitae augue congue diam, amet in tincidunt. Lectus nunc nulla placerat tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate augue dolor dolor faucibus sapien sed sodales. Netus sit aenean iaculis eget elit ut parturient. Lectus sodales vitae augue congue diam, amet in tincidunt. <span class="quote">&bdquo;</span></blockquote>
            <img src="@/assets/Group.svg" class="img-fluid" alt="">
        </div>
    </div>
</transition>  
</template>

<script>
export default {
name:'Services'
}
</script>

<style scoped>
.row4{
    margin-top: 8rem;
    margin: 4em;
    font-family: 'Roboto Condensed', sans-serif;
}
#row4{
    border-left: 2px solid #dddddddd;
    justify-content: space-between !important;
    margin-top: 2rem;
    margin-left: 3rem;
}
 img{
  width: 600px;
  height: 400px;
}
.quote{
    font-size: 50px;
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
    .row4{
        
        margin: 0.5rem;
}
#row4{
    border: none;
   display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 0;
    flex-wrap: wrap;
}
}
</style>
