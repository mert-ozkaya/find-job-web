<template>
  <div>
  <div style="background-color: #1ACFAB;" id="header">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #1ACFAB;">
          <a class="navbar-brand"><router-link to="/"> WOR</router-link></a>
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
                      <a class="nav-link"><router-link to="/source-compile">Online Compiler</router-link></a>
                  </li>
              </ul>
              <ul class="navbar-nav">
                <li v-if="isAuth" class="nav-item">
                    <a class="nav-link"><router-link to="/new-project">Proje Oluştur</router-link></a>
                </li>
                  <li v-if="isAuth" class="nav-item dropdown" >
                      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hesabım
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <a class="dropdown-item">Genel Bilgilerim</a>
                          <a class="dropdown-item">İş Başvurularım</a>
                      </div>
                  </li>
                  <li v-if="isAuth" class="nav-item">
                      <a class="nav-link" v-on:click="logout" >Çıkış</a>
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
      this.forceUpdate()
      router.push({ name: 'home' }, () => {});

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

.navbar-brand a {
  color: #FFC300;
  font-size: 20pt;
  font-weight: bold;
}

a {
    cursor:pointer;
    color:white;
    text-decoration: none;
}

a:hover {
  color:black;
  text-decoration:none;
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
