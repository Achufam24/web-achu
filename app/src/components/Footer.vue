<template>
    <div class="container-fluid">
        <div>
            <a class="navbar-brand" href="#" style="font-size:50px; color:#fff;font-family: 'Rubik Bubbles', cursive;">Achu<span style="color:#FF9430; font-size:50px;">.</span></a>
            <div>
                <p>Living, learning,leveling up one day at a time.</p>
            </div>
            <transition name="fade" appear>
                  <div class="icons">
           <a href="https://www.facebook.com/achu.agbama.9/"><i class="bi bi-facebook"></i></a> 
           <a href="https://www.whatsapp.com/"><i class="bi bi-whatsapp"></i></a> 
           <a href="https://twitter.com/agbama_achu"><i class="bi bi-twitter"></i></a> 
           <a href="https://github.com/Achufam24"><i class="bi bi-github"></i></a> 
           <a href="https://www.linkedin.com/in/achu-agbama/"><i class="bi bi-linkedin"></i></a> 
           <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
name:'Footer'
}
</script>

<style scoped>
.container-fluid{
    background: #2D4AE0;
    height: 400px;
    margin-top: 8rem;
    padding-top: 3rem;
    
}
.icons a{
    width: 4rem;
}
i{
    color: #fff;
    font-size: 3rem;
    border: none;
    margin: 5px 8px 5px 0px;
    padding: 5px;
}
</style>
