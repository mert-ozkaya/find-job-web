<template>
  <div>
    <div class="container">
      <form  @submit.prevent="AuthCheck">
        <button  style="margin-top:50px" type="submit" class="btn btn-primary"> Check Token</button>
      </form>
    </div>
  </div>
</template>


<script>
var mytoken = localStorage.getItem("token");
//console.log(mytoken);

import axios from 'axios'


export default {
  name: 'Deneme',
  methods: {
    AuthCheck() {
      //e.preventDefault();
       const headers = {
        'Content-Type': 'application/json',
        'Authorization': mytoken
      }

       console.log(mytoken);
       axios.post('http://localhost:3000/register/check', {'a':''}, {
          'headers': headers
        })
       .then(function (response) {
         console.log(response)
          //console.log(response.data);
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
