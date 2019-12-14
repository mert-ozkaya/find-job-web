<template id="">
  <div class="container">
    <h2 style="text-align:center;margin-top: 20px">İş İlanları</h2>
    <div class="row" style="padding-top:10px">
          <div v-for="item in ads" class="col-md-6" >
            <div class="card" style="border-color:red">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h3 class="card-title" style="text-align:left;font-size:15pt">{{ item.title }}</h3>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title" style="text-align:right;">{{ item.company_title }}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-text" style="text-align:left;display: block;height:50px;overflow: hidden;">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-9">
                  </div>
                  <div class="col-md-2">
                    <a class="btn btn-primary" style="text-align:left;color:white">Detaylar</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'JobAds',
  data() {
        return {
            ads: []
        }
    },
  created() {
    var self = this;
    let url = "http://localhost:3000/job-ad/list"
     axios.get(url)
     .then(function (res) {
       self.ads = res.data
      console.log("ADS:",res.data)
     })
     .catch(function (error) {
         console.log("error", error)
     });

  }
}

</script>

<style>


</style>
