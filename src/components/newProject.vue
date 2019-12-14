<template>
  <div>
    <p style="text-align:center;color:#FFC300;font-size:50pt;font-family: Times New Roman Times serif;margin-top:5  0px"> Proje Oluştur </p>

    <div class="container">
      <form  @submit.prevent="newProject">
        <div class="row">
          <div class="col-md-2">
            <label>Proje İsmi</label>
          </div>
          <div class="col-md-8">
            <input type="text" class="form-control" v-model="title">
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <label>Proje Açıklaması</label>
          </div>
          <div class="col-md-10">
            <textarea v-model="description" rows="4" cols="81">  </textarea>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <label>Başlama Tarihi</label>
          </div>
          <div class="col-md-3">
            <input type="date" class="form-control" v-model="starting_date" >
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <label>Bitiş Tarihi</label>
          </div>
          <div class="col-md-3">
            <input type="date" class="form-control" v-model="due_date" >
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <label>Ayrıntılı Proje Dokümanı</label>
          </div>
          <div class="col-md-4" >
            <input type="file" style="border:none;padding:1px" class="form-control"  @change="projectDoc($event)">
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <label>Örnek Input</label>
          </div>
          <div class="col-md-4" >
            <input type="file" style="border:none;padding:1px" class="form-control"  @change="inputFile($event)">
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <label>Örnek Output</label>
          </div>
          <div class="col-md-4" >
            <input type="file" style="border:none;padding:1px" class="form-control"  @change="outputFile($event)">
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <label>Yapılabilecek Diller</label>
          </div>
          <div class="col-md-10">
            <input type="checkbox" value="C" v-model="languages">
            <label style="margin-left:8px" >C</label>

            <input type="checkbox" style="margin-left:83px" value="C++" v-model="languages">
            <label style="margin-left:8px" >C++</label> <br>

            <input type="checkbox" value="NodeJS" v-model="languages">
            <label style="margin-left:8px" >NodeJS</label>

            <input type="checkbox" style="margin-left:40px" value="Python" v-model="languages">
            <label style="margin-left:8px" >Python</label> <br>

            <input type="checkbox" value="Java" v-model="languages">
            <label style="margin-left:8px" >Java</label> <br>
          </div>
        </div>

          <button type="submit" class="btn btn-primary">Oluştur</button>
        </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import router from "../router"

export default {
  name: 'NewProject',
  data(){
    return {
      title: '',
      description: '',
      starting_date: '',
      due_date: '',
      project_document: null,
      input_file: null,
      output_file: null,
      languages: []
    }
  },
  methods: {
    newProject(e) {
      //e.preventDefault();
               axios.post('http://localhost:3000/job-project-new', {
                   title: this.title,
                   description: this.description,
                   starting_date: this.starting_date,
                   due_date: this.due_date,
                   project_document: this.project_document,
                   input_file: this.input_file,
                   output_file: this.output_file,
                   languages: this.languages

               })
               .then(function (response) {
                  console.log(response.data)
               })
               .catch(function (error) {
                   console.log("error", error)

               });
    },
    projectDoc(event) {
      console.log('degistii1')
       this.project_document = event.target.files[0]
    },
    inputFile(event) {
      console.log('degistii2')
      this.input_file = event.target.files[0]
    },
    outputFile(event) {
      console.log('degistii3')
      this.output_file = event.target.files[0]
    }

  }
}
</script>

<style>
  .row {
    margin-top: 10px;
  }
</style>
