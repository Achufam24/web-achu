<template>
    <div>
        <div class="form1">
            <img src="@/assets/profile.png" alt="">
            <h2>{{head}}</h2>
            <input type="text" v-model="name" placeholder="Name"><br>
            <input type="email" v-model="email" placeholder="mail"><br>
            <input type="telephone" v-model="telephone" placeholder="telephone"><br>
            <button @click="SignUp">Click</button>
            <p id="redirect-login">Have an account?<router-link to="/Login">Login &#8594;</router-link></p>
            <p id="redirect-link">
                <router-link to="/">&#8592; Homepage</router-link> 
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Contact',
    data() {
    return {
      head: 'SignUp !',
      name: '',
      email:'',
      telephone:''
    }
  },
}
</script>

<style scoped>
body{
     background: #010010;
}
.form1{
    width: 450px;
    height: 480px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 8px;
    color: #010010;
    margin-top: 5%;
}
.form1 img{
 width: 200px;
 height: 100px;
}
.form1 input{
    width: 80%;
    height: 40px;
    margin-top: 15px;
    border: 2px solid skyblue;
    border-radius: 6px;
    padding-left: 10px;
}
.form1 button{
    margin-top: 18px;
    width: 80%;
    height: 40px;
    background: skyblue;
    outline: none;
    border: none;
    border-radius: 6px;
}
#redirect-link{
margin-top: 20px;
}
#redirect-link a{
    text-decoration: none;
  margin-left: 10px;
}
#redirect-login{
    margin-top: 5px;
}
#redirect-login a{
    text-decoration: none;
    color: orangered;
    margin: 2px;
}
#redirect-login a:hover{
    color: blue;
}
 @media only screen and (max-width: 600px) {
    #redirect-link a{
        display: block;
    }
 }
</style>

