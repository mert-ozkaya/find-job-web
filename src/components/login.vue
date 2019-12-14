<template>
  <div>
    <p style="text-align:center;color:#FFC300;font-size:50pt;font-family: Times New Roman Times serif;margin-top:5  0px"> FindIntellect </p>

    <div class="container">
      <form  @submit.prevent="Login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input  type="password" class="form-control" id="password" placeholder="Password" v-model="password" >
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
  </div>
</template>


<script>
  //localStorage.clear();

import axios from 'axios'
import router from "../router"
import { bus } from '../main'
import header from './header'
export default {
  name: 'Login',
  data(){
    return {
      email: '',
      password: '',
      output: ''
    }
  },
  methods: {
    Login(e) {
      //e.preventDefault();
               axios.post('http://localhost:3000/register/login', {
                   email: this.email,
                   password: this.password
               })
               .then(function (response) {
                 const token = response.data.access_token;
                 localStorage.setItem("token", token);
                 axios.defaults.headers.common["Authorization"] = token;
                 //console.log("auth_success", token, user);
                 var mytoken = localStorage.getItem("token");
                 //console.log(JSON.stringify(mytoken));
                  //console.log(response.data);
                  router.push({ name: 'home' });
               })
               .catch(function (error) {
                   console.log("error", error)

               });
    }
  }
}
</script>

<style>

</style>
