<template>
     <div>
        <header>
<div class="bg-warning py-2" style="background: #FF9430 !important;"> 
 Welcome to my Portfolio site! 
</div>
<nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark" style="position:fixed; top:0 !important;">
 <div class="container">
 	 <a class="navbar-brand" href="#" style="font-family: 'Rubik Bubbles', cursive;">Achu<span style="color: #FF9430; font-size:20px;">.</span></a>
  <button @click="toggleNav" class="navbar-toggler rotate" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div v-show="showNav" class="collapse navbar-collapse" id="main_nav">
	<ul class="navbar-nav ms-auto">
		<li class="nav-item"><a class="nav-link" href="">Home </a></li>
        <li class="nav-item"><a class="nav-link" href="">About</a></li>
		<li class="nav-item"><a class="nav-link" href="#section-three">Resume </a></li>
    <li class="nav-item"><a class="nav-link" href=""> Works</a></li>
    <li class="nav-item"><a class="nav-link" href=""> Services</a></li>
	</ul>
    <router-link to="/Contact" style="border:2px solid #FF9430; background:transparent; color:#fff; text-decoration:none; padding:5px;">Contact us</router-link>
  </div> 
 </div>
</nav>
<transition name="fade" appear>
    <div id="profile" style="margin-top:8em;" class="rotate">
    <div class="row2" style="margin-left:2rem">
        <h5 class="col-sm-3" style="text-align:center; font-size:2rem;">Hy! I Am <br><span id="name-text">Agbama Achu-ulim</span></h5>
    <p class="col-sm-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor velit vulputate viverra purus. Neque a, s</p>
    <button style="background: #2D4AE0;color:#fff;">Hire Me &#8594;</button>
    </div>
    <div><img src="@/assets/profile.png" class="img-fluid" alt="pix"></div>
</div>
</transition>

</header>
    </div>
</template>

<script>
export default {
name:'Header',
data() {
    return {
        showNav:true
    }
},
/*methods: {
    toggleNav(){
        this.showNav = !this.showNav
    }
},*/
}
</script>

<style>
header{
    background: #C4C4C429;
    height: 700px;
    position: relative;
    font-family: 'Roboto Condensed', sans-serif;
}
nav{
    position: sticky !important;
    top: 0;
    background: #2D4AE0;
}
.container{
    display: flex;
    justify-content: space-between !important;
}
#profile{
    display: flex;
    justify-content: center;
}
#profile img{
    width: 400px;
    height: 350px;
}
#name-text{
    color:#2D4AE0;
}
.row2{
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: flex-start !important;
    margin-left: 0 !important;
    font-size: 1rem;
    font-weight: 400;
}
button{
    width: 100px;
    height: auto;
    outline: none;
    border: none;
}
 .navbar-toggler,.navbar-toggler-icon{
        border: none;
    }
 button:focus,button:active {
   box-shadow: none !important;
   color: goldenrod !important;
    }
    /*span:active{
    opacity: 0;
}*/
.navbar-brand{
    font-family: 'Rubik Moonrocks', cursive;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(-60px)
}
.fade-enter-to{
  opacity: 1;
  transform: translateX(0px)
}
.fade-enter-active{
  transition: all 0.1s ease;
}
.fade-leave-from{
 opacity: 1;
  transform: translateX(0)
}
.fade-leave-to{
opacity: 0;
transform: translateX(-60px)
}
.fade-leave-active{
  transition: all 0.1s ease;
}
@keyframes wobble {
  0% {transform: translateX(-300px); opacity: 0}
  90% {transform: translateX(0px); opacity: 1;}
}
@media only screen and (max-width: 700px){
    #profile{
        display: flex;
        flex-direction: column;
        height: auto;
        margin-left: 2rem;
        margin-right: 1.5rem;
    }
    #profile button{
        display: none;
    }
    header{
        height: auto;
        margin-bottom: 5rem;
    }
}
</style>
