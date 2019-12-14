<template>
  <div>
    <div class="container">
            <h2 style="text-align:center; margin-top:20px">İş İlan Projeleri</h2>
      <div class="row" style="padding-top:20px">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h3 class="card-title" style="text-align:left;">Project Title</h3>
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
                      <div class="card-text" style="text-align:left;display: block;height:50px;overflow: hidden;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis tellus, luctus at dui ut, faucibus eleifend ligula. Quisque
                        convallis placerat luctus. Integer euismod odio sed blandit luctus. Cras ac lobortis quam, eu molestie turpis. Duis efficitur, est quis tincidunt aliquet, odio est vehicula sem, quis gravida metus ligula id neque. Praesent
                        lobortis diam ut leo semper pretium at nec velit. Ut ac lobortis sem. Cras cursus convallis dictum. In eu erat non est ullamcorper cursus.Pellentesque efficitur, metus non interdum volutpat, metus nulla molestie erat, ut cunon
                        interdum volutpat, metus nulla molestie erat, ut cunon interdum volutpat, metus nulla molestie erat, ut cursus leo dui eget urna.
                      </div>
                    </div>
                  </div>
                  <div class="row" style="margin-top: 20px">
                    <div class="col-md-10">
                      <div class="card-title">
                        Languages: c#
                      </div>
                    </div>
                    <div class="col-md-2">
                      <a href="#" class="btn btn-primary" style="text-align:left">Go somewhere</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="padding-top:20px">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="card-title" style="text-align:left;">Project Title</h3>
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
                          <div class="card-text" style="text-align:left;display: block;height:50px;overflow: hidden;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis tellus, luctus at dui ut, faucibus eleifend ligula. Quisque
                            convallis placerat luctus. Integer euismod odio sed blandit luctus. Cras ac lobortis quam, eu molestie turpis. Duis efficitur, est quis tincidunt aliquet, odio est vehicula sem, quis gravida metus ligula id neque. Praesent
                            lobortis diam ut leo semper pretium at nec velit. Ut ac lobortis sem. Cras cursus convallis dictum. In eu erat non est ullamcorper cursus.Pellentesque efficitur, metus non interdum volutpat, metus nulla molestie erat, ut cunon
                            interdum volutpat, metus nulla molestie erat, ut cunon interdum volutpat, metus nulla molestie erat, ut cursus leo dui eget urna.
                          </div>
                        </div>
                      </div>
                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-10">
                          <div class="card-title">
                            Languages: c#
                          </div>
                        </div>
                        <div class="col-md-2">
                          <a href="#" class="btn btn-primary" style="text-align:left">Go somewhere</a>
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
  mounted: function(){
    let url = "http://localhost:3000/job-project/list"

     axios.get(url)
     .then(function (response) {
       console.log(response)
     })
     .catch(function (error) {
         console.log("error", error)
     });
  }
}



</script>

<style>
</style>
