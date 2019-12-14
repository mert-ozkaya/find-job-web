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

          <button type="submit" class="btn btn-primary">Oluştur
            <span v-if="status != 0" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{status}}
          </button>
        </form>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

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
      languages: [],
      status:0
    }
  },
  methods: {
    newProject(e) {
      this.status = 1
      let formData = new FormData();
      formData.append('title',this.title)
      formData.append('description',this.description)
      formData.append('starting_date',this.starting_date)
      formData.append('project_doc',this.project_document)
      formData.append('due_date',this.due_date)
      formData.append('sample_input',this.input_file)
      formData.append('sample_output',this.output_file)
      formData.append('languages',this.languages)

      var mytoken = localStorage.getItem("token");

       axios.post('http://localhost:3000/job-project/new',formData,{
         headers:{
           'Content-Type': 'multipart/form-data',
           'Authorization': mytoken
         }
       }).then(function (response) {
          router.push({ name: 'newProject' }, () => {});
       }).catch(function (error) {
           console.log("error", error)
           router.push({ name: 'newProject' }, () => {});
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

  },
  computed: {
    sendStatus(deger) {
      console.log("calisti")
      this.status = deger
      return this.status
    }
  }
}
</script>

<style>
  .row {
    margin-top: 10px;
  }
</style>
