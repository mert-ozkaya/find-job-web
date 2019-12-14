<template>
  <div>
    <div class="container">
            <h2 style="text-align:center; margin-top:20px">İş İlan Projeleri</h2>
      <div class="row" style="padding-top:20px" v-for="item in projects">
            <div class="col-md-12" >
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h3 class="card-title" style="text-align:left;">{{item.title}}</h3>
                    </div>
                    <div class="col-md-6">
                      <h5 class="card-title" style="text-align:right;">Gaga Software</h5>
                    </div>
                    <div class="col-md-6">
                      <div class="card-title" style="text-align:left;">Kalan Süre: <span style="margin-left:10px"> asdfasdf </span> </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card-text" style="text-align:left;display: block;height:50px;overflow: hidden;">
                        {{item.description}}
                      </div>
                    </div>
                  </div>
                  <div class="row" style="margin-top: 20px">
                    <div class="col-md-10">
                      <div class="card-title">
                        Languages: {{item.languages}}
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a href="#" class="btn btn-primary" style="text-align:left">Proje Detayı</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>


<script>
var mytoken = localStorage.getItem("token");
//console.log(mytoken);

import axios from 'axios'


export default {
  name: 'Jobprojects',
  data() {
        return {
            projects: []
        }
    },
  created(){
    var self = this;
    let url = "http://localhost:3000/job-project/list"

     axios.get(url)
     .then(function (res) {
       self.projects = res.data
       console.log("Projects: ",res.data)
     })
     .catch(function (error) {
         console.log("error", error)
     });
  }
}



</script>

<style>
</style>
