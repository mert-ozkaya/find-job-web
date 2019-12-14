

<template>
  <div>
    <div>
      <MyHeader />
    </div>
    <router-view> </router-view>
</div>
</template>

<script>
import MyHeader from './components/header.vue'
import Home from './components/home.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    Home
  }
}
</script>

<style>

</style>
