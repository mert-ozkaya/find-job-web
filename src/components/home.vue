<template>


  <div>
    <div id="giris"  style="height:550px;background-color:#5191B7">
        <div class="row">
          <div class="col">
             <div style="padding:10px;margin-top:460px;margin-left:50px;margin-right:50px;">
               <button type="button" id="give-job">İş Vermek İstiyorum</button>
               <button type="button" id="want-job">İş Bulmak İstiyorum</button>
               </div>
            </div>
          </div>
    </div>
    <JobAds />
    <JobProjects />
  </div>
</template>


<script>

import axios from 'axios'
import JobProjects from "./jobProjects"
import JobAds from "./jobAds"
export default {
  name: 'Home',
  components: {
    JobProjects,
    JobAds
  }
}



</script>
