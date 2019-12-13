<template>
  <div id="signn">
    <p style="text-align:center;color:#FFC300;font-size:50pt;font-family: Times New Roman Times serif;margin-top:5  0px"> FindIntellect </p>

    <div class="container" id="signin-form">
      <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Signin'
}
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

  #signn {
   background-image: url("C:\\Users\\Mert\\Desktop\\back.jpg");
   background-repeat: repeat;
   border-radius: 5px;
   color:white;
   padding-bottom:2px;
  }
  #signin-form {
    background-color:white;
    padding:20px;
    margin-top: 50px;
    width: 400px;
  }

</style>
