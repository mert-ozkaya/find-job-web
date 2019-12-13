<template>
  <div>
  <div style="background-color: #1ACFAB;">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #1ACFAB;">
          <a class="navbar-brand">WOR</a>
          <button class="navbar-toggler" style="background-color: #fafbf5;" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavDropdown" class="navbar-collapse collapse">
              <ul class="navbar-nav mr-auto"  style="padding-left:50px">
                  <li class="nav-item">
                      <a class="nav-link"><router-link to="deneme">İş İlanları</router-link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link">İş Kapmaca</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link">Challendes</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><router-link to="source-compile">Online Compiler</router-link></a>
                  </li>
              </ul>
              <ul class="navbar-nav">
                  <li v-if="isAuth" class="nav-item dropdown" >
                      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hesabım
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a class="dropdown-item">Genel Bilgilerim</a>
                          <a class="dropdown-item">İş Başvurularım</a>
                          <a class="dropdown-item" v-on:click="logout"> Çıkış </a>
                      </div>
                  </li>

                  <li v-if="!isAuth" class="nav-item">
                      <a class="nav-link" ><router-link to="/login">Giriş</router-link></a>
                  </li>
                  <li v-if="!isAuth" class="nav-item">
                      <a class="nav-link" ><router-link to="/signin">Kaydol</router-link></a>
                  </li>
              </ul>
          </div>
      </nav>

  </div>
<router-view />
</div>
</template>

<script>
import router from "../router"
import { bus } from '../main'
var mytoken = localStorage.getItem("token")
var isAuth = false
  if(mytoken != null) {
    isAuth = true
  }

export default {
  name: 'MyHeader',
  data() {
    return {
      isAuth
    }
  },
  methods: {
    logout: function() {
      localStorage.clear();
      bus.$emit('Header', 'asdasdasdsad')
      router.push('/source-compile');

    }
  }

}


//console.log(mytoken);
</script>


<style>

.active {
 background-color: #FFC300;
 color:white;
}
.navbar-light .navbar-brand {
 color: white;
 font-size: 17pt;
}

.navbar-light .navbar-nav .nav-link {
   color: white;

}

router-link a{
    text-decoration: none;
    color:red;
}
router-link-active a{
    text-decoration: none !important;
}

#giris {
 background-image: url("C:\\Users\\Mert\\Desktop\\bbb.jpg");
 background-repeat: no-repeat;
 background-position: center;
}

#give-job {
 border: 3px solid white;
 width:200px;
 height:50px;
 background-color:#FFC300;
 border-radius: 8px;
}

#want-job {
 border: 3px solid white;
 margin-left:5px;
 width:200px;
 height:50px;
 background-color:#1ACFAB;
 border-radius: 8px;
}

#give-job:hover {
 background-color: #D7AB1C;
 color:white;
}

#want-job:hover {
 background-color: #27BD9F;
 color:white;
}


#projects {
 background-image: url("C:\\Users\\Mert\\Desktop\\back.jpg");
 background-repeat: repeat;
}

#section-title {
 text-align: center;
 font-size:35pt;
 color:white;
 margin-bottom: 0px;
}

</style>
