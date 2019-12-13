<template>
  <div>
    <h1>Online Compiler </h1>
    <form action="http://localhost:3000/compile/c-compile" method="post" enctype="multipart/form-data">

      <input type="file" name="c_source_code" value="Upload File"> <br>
      <br>
      <input style="margin-left: 200px" type="submit" value="Submit">
    </form>
    
  </div>
</template>


<script>
export default {
  name: 'SourceCompile'
}
</script>

<style>
</style>
