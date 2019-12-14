import Vue from "vue";
import Router from "vue-router";
import Deneme from "./components/deneme.vue";
import Signin from "./components/sign-in.vue";
import SourceCompile from "./components/source-compile.vue"
import Login from "./components/login.vue"
import Home from "./components/home.vue"
import NewProject from "./components/newProject"

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/deneme', name: 'deneme', component: Deneme},
    {path: '/signin', name: 'signin', component: Signin},
    {path: '/source-compile', name: 'source-compile', component: SourceCompile},
    {path: '/login', name: 'login', component: Login},
    {path: '/new-project', name: 'newProject', component: NewProject}
  ],
  mode: 'history'
});
