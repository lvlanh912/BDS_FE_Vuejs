<template>
  <div class="home">
   <h2>{{content}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data(){
    return{
       content:"Đây là trang chủ admin"
    }
  },
  components: {
  }
}
</script>